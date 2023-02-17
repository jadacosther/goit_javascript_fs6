const numbers = [5, 10, 15, 20, 25];

let suma = 0
function sumar(number, index){
   suma += number
   console.log(suma)
}

// Digitación forEach
numbers.forEach(sumar);

