const fs = require("fs");

setTimeout(()=>{
    fs.writeFile("./example-write-file.txt", "Hello World!!!", ()=>{
        console.log("File Created...");
        fs.readFile("./example-write-file.txt", "utf-8", (err, data)=>{
            console.log(data);
        });
    });
}, 0);