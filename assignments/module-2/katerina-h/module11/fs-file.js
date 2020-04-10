const fs = require("fs");
const argv = require ('yargs').argv

let filenames = [];

fs.readFile("./existing.txt", "utf-8", (err, data) =>{
    filenames = data.toString().split(",");

    if (filenames.includes(argv.file)) {
        console.log("This file name already exists! Please provide new file name.");
    } else {
        fs.writeFile("./" + argv.file ,"You are awesome!", ()=>{ 
            filenames.push(argv.file);
            fs.writeFile("./existing.txt", filenames, ()=>{
            })
        });
    }   
});


