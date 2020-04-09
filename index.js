
readFile
readFileSync
readFile




setTimeout(() => { console.log("0") }, 200) // Delay
console.log("1")
console.log("2")
console.log("3")
console.log("4")
console.log("5")
setTimeout(() => { console.log("6") }, 1000)  // Delay
setTimeout(() => { console.log("7") }, 0)  // Delay
setTimeout(() => { console.log("8") }, 0) 
console.log("9")
