const express = require("express");
const app = express();
const path = require("path")
const fs = require("fs")

app.get("/:id", (req, res)=>{

    fs.readFile(path.join(__dirname, "employees.json"), "utf-8", (err, data)=>{
        const users = JSON.parse(data);
        for (let index = 0; index < users.length; index++) {
            const user = users[index];
            if(user.name === req.params.id)
                {
                    res.send(JSON.stringify(user));
                }
            else
                {
                    res.send({ error : "user not found" })
                }
        }
    })
         
})

app.get("/", (req, res)=>{
    fs.readFile(path.join(__dirname, "employees.json"), "utf-8", (err, data)=>{
        res.send(data);
    })
});

app.listen(3000, (err)=>{
    console.log("Server started successfully.");
})