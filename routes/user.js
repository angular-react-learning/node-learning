const express = require("express");
const Router = express.Router();
const UserModel = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

Router.get("/", (req, res) => {
    res.send([])
})

// Render Form for signup
Router.get("/signup", (req, res) => {
    res.render("signup")
})

// Store data in mongo.
Router.post("/signup", async (req, res) => {
    // res.render("signup")
    const hashedPassword = bcrypt.hashSync(req.body.password, 8);
    const User = await UserModel.create({
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email,
    });
    res.send({ message: "user created successfully." })
})

Router.get("/login", (req, res) => {
    res.render("login")
})

Router.post("/login", (req, res) => {

    UserModel.findOne({ email: req.body.email }, (err, user) => {
        if (err) { return res.status(500).send({ message: "error on server." }) }
        if (!user) { res.redirect("/user/login") };

        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

        if (passwordIsValid) {
            const token = jwt.sign({ id : user._id }, "secret key is this", {
                expiresIn : 86400
            })
            res.send({ token : token })
        }
        else {
            res.send({ messge : "invalid user." })
        }

    })

    // res.send({
    //     token: 897938127391739123
    // })
})

Router.post("/logout", (req, res) => {
    res.send({
        message: "User successfully logged out."
    })
})

// Authentication controlled page.
Router.get("/profile", (req, res) => {
    res.send({
        message: "User successfully logged out."
    })
})

module.exports = Router;