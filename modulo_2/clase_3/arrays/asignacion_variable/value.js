let a = 5;
// Assignment by value, one more cell will be created in memory,
// with the value 5 copied
let b = a;
console.log(a); // 5
console.log(b); // 5

// Change the value of a
a = 10;
console.log(a); // 10
// The value of b has not changed since it is a separate copy
console.log(b); // 5