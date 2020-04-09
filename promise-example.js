function Sum(a, b)
    {
        return new Promise((resolve, reject)=>{
            const result = a + b;
            const randomMillisecs = Math.round(Math.random() * 1000);
            console.log(randomMillisecs);
            setTimeout(()=>{
                // reject({ a, b, result })
                resolve(result);
            }, randomMillisecs); 
        })
    }

    function Multiply(a, b)
    {
        return new Promise((resolve, reject)=>{
            const result = a * b;
            const randomMillisecs = Math.round(Math.random() * 1000);
            setTimeout(()=>{
                resolve(result)
                // reject(result);
            }, randomMillisecs); 
        })
    }

// Sum(1, 2).then((result)=>{
//     console.log("sum", result);
// })
// Sum(2, 3).then((result)=>{
//     console.log("sum", result);
// })

const promise1 = Sum(1, 2).catch(()=>{
    console.log("catch for promise called.")
});
const promise2 = Sum(2, 3);

Promise.all([promise1, promise2])
.then((values)=>{
    return Multiply(...values)
})
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.error("error - ", err);
})