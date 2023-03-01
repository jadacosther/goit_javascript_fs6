function greetGuest(greeting) {
    console.log(`${greeting}, ${this.username}.`);
  }
  
  const mango = {
    username: "Mango",
  };
  const poly = {
    username: "Poly",
  };
  
  greetGuest.apply(mango, ["Bienvenidos"]); // Bienvenidos a Mango.
  greetGuest.apply(poly, ["Con la llegada"]); // Con la llegada de Poly.