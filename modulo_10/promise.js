let finalizar = true


const promesa = new Promise((resolve, reject) => {
  if(finalizar)
    setTimeout(() => resolve({name: "operación", id:00002, desciption:"Resolviendo petición asíncrona"}), 10000);
  else
   reject('no se puede finalizar la petición')
})
  

  promesa.then(response => {
    console.table(response);
  }).catch(error => {
    console.log('error : ' + error);
  });

