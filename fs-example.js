const fs = require("fs");

// fs.open("somefile.txt", "r+", (err, response)=>{
//     if(err)
//         {
//             console.error(err, "Error Occured");
//             return false;
//         }
//     console.log("File opened successfully!!!");
// })

// fs.stat("somefile.txt", (err, response)=>{
//     if(err)
//         {
//             console.error(err, "Error Occured");
//             return false;
//         }
//     console.log(response);
//     console.log(response.isFile())
//     console.log(response.isDirectory())
// })

// fs.writeFileSync("somefile.txt", "Hello World!!!");
// console.log("File write completed.")

// const contents = fs.readFileSync("somefile.txt", "utf-8");
// console.log("contents", contents)

// fs.rename("somefile.txt", "example.txt", ()=>{
//     console.log("file renamed.")
// });

// fs.readFile("person.json", "utf-8", (err, data)=>{
//     if(err)
//         {
//             console.error("Error Occured.");
//             return false;
//         }
//     const jsoncontent = JSON.parse(data);
//     console.log(jsoncontent.address.flatno);
// })

const content = {
    name : "Amit",
    company : "Edureka",
    hello : ()=>{}
}

console.log(content, JSON.stringify(content))
