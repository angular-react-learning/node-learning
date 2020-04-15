const express = require("express");
const Router = express.Router();
const UserModel = require("../model/user");
const { checkUsername } = require("../validator")

Router.get("/", (req, res)=>{
    res.render("add-user", {});
});

Router.post("/", (req, res)=>{

    if(checkUsername(req.body.name) && req.body.name !== "" && req.body.address !== "" && req.body.email !== "")
        {
            const User = new UserModel({
                name : req.body.name.trim(),
                address : req.body.address.trim(),
                email : req.body.email.trim()
            })
            User.save();
            res.send("user has been added...");
        }
    else
        {
            res.send("user input is invalid.");
        }
});

module.exports = Router;