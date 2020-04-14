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
    }

`);

module.exports = ApplicationSchema;