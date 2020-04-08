const a = parseFloat(process.argv[2]);
const operator = process.argv[3];
const b = parseFloat(process.argv[4]);

if(operator === "+")
    {
        console.log(a + b)
    }
else if(operator === "-")
    {
        console.log(a - b)
    }