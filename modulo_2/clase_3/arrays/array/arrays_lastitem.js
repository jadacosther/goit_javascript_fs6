const clients = ["Mango", "Poly", "Ajax"];
const lastElementIndex = clients.length - 1;
console.log(lastElementIndex); // 2
console.log(clients[lastElementIndex]); // "Ajax"

let fruits = ["Apple", "Orange", "Plum"];
// es lo mismo que fruits[fruits.length-1]
console.log( fruits.at(-1) ); // Plum