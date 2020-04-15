
function HelloWorld()
    {
        console.log("exported function is called...")
    }

// ES5
// Default
module.exports = HelloWorld;

// Named Exports
// when a single file exports multiple variable or function
module.exports = {
    HelloWorld
}

// ES6
// export default HelloWorld;

// export {
//     HelloWorld
// }
