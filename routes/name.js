const express = require("express");
const router = express.Router();
const { getConnection } = require("../util/mongo")

router.get("/:name", (req, res) => {
    getConnection((err, client) => {
        const db = client.db("imdb");
        const collection = db.collection("movie");
        collection.findOne({ name: req.params.name }, (err, docs) => {
            res.send(docs);
        })
    })
});

router.put("/:name", (req, res) => {
    getConnection((err, client) => {
        const db = client.db("imdb");
        const collection = db.collection("movie");
        collection.update({
            name: req.params.name,
        }, {
            $set: {
                name: req.body.name,
                year: req.body.year,
                rating: req.body.rating
            }
        }, (err, docs) => {
            res.send(docs);
        })
    })
});

router.delete("/:name", (req, res) => {
    getConnection((err, client) => {
        const db = client.db("imdb");
        const collection = db.collection("movie");
        collection.remove({
            name: req.params.name,
        }, (err, docs) => {
            res.send(docs);
        })
    })
});

module.exports = router;