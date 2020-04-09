const request = require("request");
const axios = require("axios").default;
const util = require("util");

// const requestPromise = util.promisify(request);

// requestPromise("https://jsonplaceholder.typicode.com/todos/", {
//     method : "get"
// }).then((response)=>{
    
//     console.log(JSON.parse(response.body));
// })

axios.get("https://jsonplaceholder.typicode.com/todos/").then((response)=>{
    console.log(response)
})
.catch((err)=>{
    console.log(err)
})