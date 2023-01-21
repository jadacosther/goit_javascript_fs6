function multiply(x, y, z) {
    console.log("El código antes de 'return' se ejecuta como siempre");
  
    //  Devuelve el resultado de la expresión de la multiplicación.
    return x * y * z;
  
    console.log("Este registro nunca se ejecutará, y viene después de 'return'");
  }
  
  // El resultado de la función se puede guardar en una variable
  let result = multiply(2, 3, 5);
  console.log(result); // 30
  
  result = multiply(4, 8, 12);
  console.log(result); // 384
  
  result = multiply(17, 6, 25);
  console.log(result); // 2550