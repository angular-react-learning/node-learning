const express = require("express");
const Router = express.Router();
const UserModel = require("../model/user");

Router.get("/", (req, res)=>{
    res.render("add-user", {});
});

Router.post("/", (req, res)=>{
    console.log(req.body);
    const User = new UserModel({
        name : req.body.name,
        address : req.body.address,
        email : req.body.email
    })
    User.save();
    res.send("user has been added...");
});

module.exports = Router;