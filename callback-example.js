
(1 + 2) * (3 + 4)
// (a + b) * (c + d)

((1 + 2) - 4) * (3 + 4)
// (a + b) * (c + d)

function Calculate() {
    Sum(1, 2, (sumOfAB) => {
        console.log(sumOfAB)
        Sum(3, 4, (sumOfCD) => {
            console.log(sumOfCD)
            Multiple(sumOfAB, sumOfCD, (mulipleOfABCD) => {
                console.log(mulipleOfABCD)
            })
        })
    })
}

function Sum(a, b, notify) {
    const c = a + b;
    notify(c)
}

function Multiple(a, b, notify) {
    const c = a * b;
    notify(c)
}

Calculate()

// function subscribe(callback)
//     {
//         /// Some busines 
//         callback({})
//     }

// subscribe(()=>{

// })