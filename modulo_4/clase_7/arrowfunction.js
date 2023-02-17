
let sum = (a, b) => a + b;

alert( sum(1, 2) ); // 3

//Otro ejemplo

const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Index ${index}, valor ${number}`);
};

numbers.forEach(logMessage);

