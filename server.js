const express = require("express")
const application = require("./application");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/EdurekaExample", { useNewUrlParser: true })
const port = 3000;



const server = application.listen(port, ()=>{
    console.log(`server started at ${port}`);
})