  
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json({ type : "application/json" }))
app.use(bodyParser.text({ type : "text/html" }))


const MongoClient = require("mongodb").MongoClient;
const MongoURL = "mongodb://localhost:27017";


function getConnection(callback)
  {
        return MongoClient.connect(MongoURL, callback);
  }

app.get("/", (req, res)=>{
    getConnection((err, client)=>{
        const db = client.db("imdb");
        const collection = db.collection("movie");
        collection.find({}).toArray((err, docs)=>{
            res.send(docs);
            client.close();
        })
    })
});

app.get("/name/:name", (req, res)=>{
    getConnection((err, client)=>{
        const db = client.db("imdb");
        const collection = db.collection("movie");
        collection.findOne({ name : req.params.name }, (err, docs)=>{
            res.send(docs);
        })
    })
});

app.get("/rating/:abc", (req, res)=>{
    console.log("req.params", req.params)
    const rating = parseInt(req.params.abc);
    getConnection((err, client)=>{
        const db = client.db("imdb");
        const collection = db.collection("movie");
        collection.find({ rating : { $gte : rating } })
        .toArray((err, docs)=>{
            res.send(docs);
        })
    })
});

app.post("/", (req, res)=>{
    getConnection((err, client)=>{
        const db = client.db("imdb");
        const collection = db.collection("movie");
        collection.insertOne({ 
            name : req.body.name,
            year : req.body.year,
            rating : req.body.rating
        }, (err, docs)=>{
            res.send(docs.ops[0]);
        })
    })
});

app.put("/name/:name", (req, res)=>{
    getConnection((err, client)=>{
        const db = client.db("imdb");
        const collection = db.collection("movie");
        collection.update({ 
            name : req.params.name,
        }, { $set : { 
            name : req.body.name,
            year : req.body.year,
            rating : req.body.rating
         } }, (err, docs)=>{
            res.send(docs);
        })
    })
});

app.delete("/name/:name", (req, res)=>{
    getConnection((err, client)=>{
        const db = client.db("imdb");
        const collection = db.collection("movie");
        collection.remove({ 
            name : req.params.name,
        }, (err, docs)=>{
            res.send(docs);
        })
    })
});



app.listen(3000, ()=>{
    console.log("Server Started...")
});