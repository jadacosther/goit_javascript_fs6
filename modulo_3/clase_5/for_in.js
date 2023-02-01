let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in user) {
    // claves
    console.log( key );  // name, age, isAdmin
    // valores de las claves
    console.log( user[key] ); // John, 30, true
  }
