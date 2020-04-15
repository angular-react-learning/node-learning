function checkUsername(value)
    {
        return RegExp(/^[a-zA-Z]+$/).test(value)
    }

module.exports = {
    checkUsername
}