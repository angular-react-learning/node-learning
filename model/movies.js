const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    name : String,
    year : Number,
    rating : Number,
    achievements : String
});

// movie > movies

const MovieModel = mongoose.model("movie", MovieSchema);

module.exports = MovieModel;