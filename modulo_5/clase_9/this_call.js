function greetGuest(greeting) {
    console.log(`${greeting}, ${this.username}.`);
  }
  
  const mango = {
    username: "Mango",
  };
  const poly = {
    username: "Poly",
  };
  
  greetGuest.call(mango, "Bienvenidos"); // Bienvenidos a Mango.
  greetGuest.call(poly, "Con la llegada"); // Con la llegada de Poly.