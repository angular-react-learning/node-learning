const express = require("express");
const ejs = require("ejs");
const app = express();
const axios = require("axios").default;


app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    

    axios.get("https://jsonplaceholder.typicode.com/todos/").then((response)=>{
        res.render("index", { posts : response.data, heading : "NodeJS Posts" });
    })
    .catch((err)=>{
    })
})

app.listen(9600, ()=>{
    console.log("server started!!!")
})