const a = [];
const b = { c : 1 };

// const c = {}
// c.a = a;
// c.b = b;

const c = {a, b};

console.log(c)



// const obj1 = { a : 1, b : 2, same : 10 }
// const obj2 = { c : 3, d : 4, same : 20 }
// const obj3 = { e : 5, f : 6, same : 100 }
// // const obj3 = Object.assign(obj1, obj2)
// const newObj = {...obj1, ...obj2, ...obj3}
// console.log(newObj);

// var obj = { a : 1, b : 2, c : 3 };

// const a = obj.a
// const b = obj.b
// const c = obj.c

// const {a, b, c} = obj

// console.log(a)
// console.log(b)
// console.log(c)

// axios.get("url").then((response)=>{
//     const data = response.data
// })

// axios.get("url").then(({ data })=>{
//     console.log(data);
// })
