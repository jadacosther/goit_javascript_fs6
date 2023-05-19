function resolveAfter2Seconds() {
    return new Promise((success, exception) => {
      setTimeout(() => {
        exception({tipoError: "PAGO", mensaje:"3245: error en paypal"});
      }, 2000);
    });
  }



  async function probarFuncion(){
    try{
      let respuesta = await resolveAfter2Seconds() // error
    }catch(exception){
      
      if (exception.tipoError == "PAGO")
          mensajeUsuarioPagoError()
    }
  }



function mensajeUsuarioPagoError(){
     console.log("En este momento el servicio no esta disponible, su pago no se realizo intente mas tarde")
}
console.log(probarFuncion())
 
console.log(probarFuncion())


  
















  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
  }
  
  asyncCall();