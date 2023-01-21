const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.includes("Poly")); // true
console.log(clients.includes("Monkong")); // false


//condiciones
const fruit = "apple";

if (fruit === "apple" || fruit === "strawberry") {
  console.log("It is a red fruit!");
}

//
const fruit = "apple";

if (
    fruit === "apple" ||
    fruit === "strawberry" ||
    fruit === "cherry" ||
    fruit === "cranberries"
  ) {
    console.log("It is a red fruit!");
  }

// Make an array of options
const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "cherry";

// Check if the element exists
const hasFruit = redFruits.includes(fruit);

if (hasFruit) {
  console.log(`${fruit} is a red fruit!`);
}