const { buildSchema } = require("graphql")

const ApplicationSchema = buildSchema(`

    type Query {
        users : [User],
        user(name : String) : User
    }

    type User {
        name : String,
        email : String,
        address : String
        _id : String
    }

    type Mutation {
        addUser(name : String, email : String, address : String) : User
    }

`);

module.exports = ApplicationSchema;