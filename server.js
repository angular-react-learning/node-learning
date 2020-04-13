const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const home = require("./routes/index")
const name = require("./routes/name");
const rating = require("./routes/rating");

app.use(bodyParser.json({ type : "application/json" }))
app.use(bodyParser.text({ type : "text/html" }))

app.use("/", home);
app.use("/name", name);
app.use("/rating", rating);

app.listen(3000, ()=>{
    console.log("Server Started...")
});