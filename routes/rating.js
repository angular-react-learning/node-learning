const express = require("express");
const router = express.Router();
const { getConnection } = require("../util/mongo")

// /rating/rating/:abc

router.get("/:abc", (req, res) => {
    console.log("req.params", req.params)
    const rating = parseInt(req.params.abc);
    getConnection((err, client) => {
        const db = client.db("imdb");
        const collection = db.collection("movie");
        collection.find({ rating: { $gte: rating } })
            .toArray((err, docs) => {
                res.send(docs);
            })
    })
});

module.exports = router;