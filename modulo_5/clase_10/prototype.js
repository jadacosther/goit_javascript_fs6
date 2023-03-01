// otro ejemplo
const animal = {
    legs: 4,
  };

  const dog = Object.create(animal);
  dog.name = "Mango";
  
  const cat = Object.create(animal)

  const hourse= {
    color: "brown"
  }

  console.log(dog); // { name: 'Mango', __proto__: animal }
  console.log(dog)
  console.log(animal.isPrototypeOf(dog)); // true
  console.log(animal.isPrototypeOf(cat)); // true
  console.log(animal.isPrototypeOf(hourse)); // false



