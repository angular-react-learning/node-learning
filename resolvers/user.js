const UserModel = require("../model/user")

function Users()
    {
        return UserModel.find({})
    }

function User(obj, args, context, info)
    {   
        
        return UserModel.findOne({ name : obj.name })
    }

module.exports = { Users, User };