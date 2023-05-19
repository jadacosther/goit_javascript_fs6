let hayFiesta = false;

const miCumple = (KayoSeEnferma) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!KayoSeEnferma) {
          resolve(2);
          hayFiesta = true
        } else {
          hayFiesta = false
        }
      }, 2000);
    });
  };

  


//no se enferma
miCumple(false)
  .then((result) => {
    console.log(`Yo tengo ${result} tortas`); // En la consola: Yo tengo 2 tortas  
  })
  .catch((error) => {
    console.log(error); // No se ejecuta
  })
  .finally(() => {
    if(hayFiesta)
      console.log(" hay Fiesta"); 
    else
      console.log(" no hay Fiesta"); 
  });


Promise.reject("Estoy triste").catch( response => console.log(response));
//se enferma

