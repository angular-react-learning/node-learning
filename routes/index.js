const express = require("express");
const router = express.Router();
const { getConnection } = require("../util/mongo")
const MovieModel = require("../model/movies");


router.get("/", (req, res) => {
    MovieModel.find((err, docs)=>{
        console.log(err, docs);
        res.send(docs);
    })
});


router.post("/", (req, res) => {

    const name = req.body.name;
    const year = req.body.year;
    const rating = req.body.rating;
    const achievements = req.body.achievements;

    const movie = new MovieModel({
        name : name,
        year : year,
        rating : rating,
        achievements : achievements
    })

    movie.save((err)=>{
        res.send({})
    })

    // or 
    MovieModel.insertMany([{

    }]).then

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