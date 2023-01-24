const a = ["Mango"];
// Since a is an array, a reference to an existing array in memory
// is written to b. Now a and b point to the same array.
const b = a;
console.log(a); // ["Mango"]
console.log(b); // ["Mango"]

// Change the array by adding another element, using the pointer from a
a.push("Poly");
console.log(a); // ["Mango", "Poly"]

// b has also changed because b, just like a,
// contains a reference to the same space in memory
console.log(b); // ["Mango", "Poly"]

// The result is repeated
b.push("Ajax");
console.log(a); // ["Mango", "Poly", "Ajax"]
console.log(b); // ["Mango", "Poly", "Ajax"]


// por que sucede esto al comparar dos arreglos?
console.log(['a', 'b', 'c'] == ['a', 'b', 'c']) //false


//clonar arrays
  let clone = structuredClone(user);
  
  alert( user.sizes === clone.sizes ); // false, objetos diferentes
  
  // ahora user y clone están totalmente separados
  user.sizes.width = 60;    // cambia una propiedad de un lugar
  alert(clone.sizes.width); // 50, no están relacionados