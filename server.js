const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const ejs = require("ejs");
const expressGraphQL = require("express-graphql");
const schema = require("./schema");
const Resolvers = require("./resolvers")

const mongoose = require("mongoose");
const db = mongoose.connect("mongodb://localhost:27017/imdb", { useNewUrlParser: true })
const user = require("./routes/user")

app.set("view engine", "ejs");

app.use(bodyParser.json({ type : "application/json" }))
app.use(bodyParser.text({ type : "text/html" }))
app.use(bodyParser.urlencoded({ extended : true }))


app.use("/graphql", expressGraphQL({
    schema : schema,
    graphiql : true, // Development Env
    rootValue : Resolvers
}))

app.use("/user", user);

app.listen(3000, ()=>{
    console.log("Server Started...")
});