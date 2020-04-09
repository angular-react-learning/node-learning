const fs = require("fs");
const util = require("util");
const writeFilePromise = util.promisify(fs.writeFile);
const readFilePromise = util.promisify(fs.readFile);

fs.writeFile("async-file.txt", "Async", ()=>{
    console.log("Async file created.")
})

writeFilePromise("promise-file.txt", "Promise")
.then(()=>{
    console.log("Promise file created.")
})
.then(()=>{
    return readFilePromise("promise-file.txt", "utf-8")
})
.then((contents)=>{
    console.log("contents - ", contents)
})