const { Users, User, AddUser } = require("./user")

const Root = {
    users: Users,
    user: User,
    addUser: AddUser
}

module.exports = Root;