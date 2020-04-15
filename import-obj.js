// ES5
// const AnyName = require("./export-obj");
// AnyName()
const { HelloWorld : HiWorld } = require("./export-obj");
HiWorld()

// ES6 
// import Anyname from "./export-obj";
// import { HelloWorld } from "./export-obj";
// import { HelloWorld as HiWorld } from "./export-obj";