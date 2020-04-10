const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json({ type : "application/json" }))

app.use(bodyParser.text({ type : "text/html" }))


const MongoClient = require("mongodb").MongoClient;
const MongoURL = "mongodb://localhost:27017";


app.get("/movies", (req, res)=>{
    
    MongoClient.connect(MongoURL, (err, client)=>{
        const db = client.db("imdb"); // Your Database name
        const collection = db.collection("movie"); // Your collection name
        collection.find({}).toArray((err, docs)=>{
            res.send(docs);
            client.close();
        })
    })
})

app.post("/movies", (req, res)=>{
    MongoClient.connect(MongoURL, (err, client)=>{
        const db = client.db("imdb");
        const collection = db.collection("movie");
        collection.save(req.body, function(err, response){
            res.send("inserted.")
            client.close();
        })
    })
})

app.put("/movies/:id", (req, res)=>{
    console.log(req.params.id);
    MongoClient.connect(MongoURL, (err, client)=>{
        const db = client.db("imdb");
        const collection = db.collection("movie");
        collection.update({ name : "Black Panther" }, { $set : { achie : 2 } } ,function(err, response){
            console.log(err);
            res.send("updated.")
            client.close();
        })
    })
})

app.listen(6500);