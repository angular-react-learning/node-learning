const express = require("express");
const router = express.Router();
const { getConnection } = require("../util/mongo")


router.get("/", (req, res) => {
    getConnection((err, client) => {
        const db = client.db("imdb");
        const collection = db.collection("movie");
        collection.find({}).toArray((err, docs) => {
            res.send(docs);
            client.close();
        })
    })
});


router.post("/", (req, res) => {
    getConnection((err, client) => {
        const db = client.db("imdb");
        const collection = db.collection("movie");
        collection.insertOne({
            name: req.body.name,
            year: req.body.year,
            rating: req.body.rating
        }, (err, docs) => {
            res.send(docs.ops[0]);
        })
    })
});

router.get("/achievements", (req, res) => {
    getConnection((err, client) => {
        const db = client.db("imdb");
        const collection = db.collection("movie");
        collection.find({ achievements: { $exists: true } }).toArray((err, docs) => {
            res.send(docs);
        })
    })
});

module.exports = router;