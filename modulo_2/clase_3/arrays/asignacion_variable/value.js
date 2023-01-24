let a = 5;
// Assignment by value, one more cell will be created in memory,
// with the value 5 copied
let b = a;
console.log(a); // 5
console.log(b); // 5

let x = 5;
let y = 10;
let z = 25;

x = y; // x is 10
x = y = z; // x, y and z are all 25
