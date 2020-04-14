const UserModel = require("../model/user")

function Users()
    {
        return UserModel.find({})
    }

function User(obj, args, context, info)
    {   
        
        return UserModel.findOne({ name : obj.name })
    }


function AddUser(obj, args, context, info)
    {   
        const User = new UserModel({
            name : obj.name,
            email : obj.email,
            address : obj.address
        })
        // Data like Object, Array, String, Number, Boolean
        // or
        // Promise
        return User.save();
        // return axios("http://")
    }

module.exports = { Users, User, AddUser };