const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name : String,
    address : String, 
    email : String,
    createdOn : { type : Date, default : Date.now }
})

const UserModel = new mongoose.model("user", UserSchema);

module.exports = UserModel;