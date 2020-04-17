const assert = require("assert");

const expected = 2;

function add(a, b)
    {
        return a + b
    }

assert.equal(add(1, 1), expected, "Function Works")