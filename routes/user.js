const express = require("express");
const Router = express.Router();
const UserModel = require("../model/user");
const { checkUsername } = require("../validator")

const {calculateDaysDiff} = require("../util")

Router.get("/", (req, res)=>{
    res.render("add-user", {});
});

Router.get("/dashboard", (req, res)=>{
    UserModel.find().then((response)=>{
        console.log(response);

        for (let index = 0; index < response.length; index++) {
            const user = response[index];

            const diff = calculateDaysDiff(user.createdOn);

            if(diff > 2)
                {
                    user.status = "delivered"
                }
            else if(diff === 1)
                {
                    user.status = "dispatched"
                }
            else if (diff === 0)
                {
                    user.status = "in-progress"
                }
        }

        res.render("dashboard", { posts : response });
    })
});


Router.post("/", (req, res)=>{

    if(req.body.name !== "" && checkUsername(req.body.name) &&  req.body.address !== "" && req.body.email !== "")
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