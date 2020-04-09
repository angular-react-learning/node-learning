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
    return readFilePromise("promise-file-1.txt", "utf-8")
    .catch(()=>{
        console.log("not able to read file")  
    })
})
.then((contents)=>{
    console.log("contents - ", contents)
})
.catch((err)=>{
    console.log(err)
})