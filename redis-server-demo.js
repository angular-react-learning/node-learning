const express = require("express");
const redis = require("redis");

const app = express();
const port = 3004;

const RedisClient = redis.createClient({
    host : "127.0.0.1",
    port : 6379
})

RedisClient.set("sitevisitcounter", 0, ()=>{

});

app.get("/", (req, res)=>{
    RedisClient.get("sitevisitcounter", (err, counter)=>{
        res.send(`Users visited till no: ${counter}`)
        RedisClient.set("sitevisitcounter", parseInt(counter, 10) + 1)
    })
})

app.listen(3004)