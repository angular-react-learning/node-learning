const fs = require("fs");
const path = require("path")

const filepath = ".json/data/example-path.txt";
// console.log(path.relative(filepath))
console.log(path.isAbsolute(filepath))
console.log(path.extname(filepath))
console.log(path.dirname(filepath))
console.log(path.basename(filepath))

console.log(__dirname);

fs.writeFile(path.join(__dirname, "example-path.txt"), "Hi World!!!", () => {
    console.log("File Created...");
    fs.readFile("./example-write-file.txt", "utf-8", (err, data) => {
        console.log(data);
    });
});
