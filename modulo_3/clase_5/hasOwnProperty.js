const animal = {
    legs: 4,
  };
  const dog = Object.create(animal); // crea una copia del objeto en otra variable
  dog.name = "Mango";// propiedad no intrínsecas

console.log(dog.hasOwnProperty("name")); // true propiedad própia
console.log(dog.hasOwnProperty("legs")); // false no es una propiedad própia