
function viculacionUsuario(name, apellido, procesoUsuario, problemasUsuario = function(){}) {
    console.log(`Registramos a un invitado ${name}. ${apellido}`);
    if(procesoUsuario.name == "presentacion")
        procesoUsuario(name, apellido, "Mexico")
  }
  

  function bienvenida(name, lastName) {
    console.log(`Bienvenido ${name} - ${lastName}`);
  }


  function bienvenida(name, lastName) {
    console.log(`Bienvenido ${name} - ${lastName}`);
  }

  function presentacion(name, lastName, otro) {
    console.log(`Presenteacion al equipo de trabajo ${name} - ${lastName}`);
  }


  function capacitacion(name) {
    console.log(`Presenteacion al equipo de trabajo ${name} `);
  }

  // Pasar la función online greet como callback
  viculacionUsuario("Mango","Perez", bienvenida);

  viculacionUsuario("Mango","Perez", presentacion);


  viculacionUsuario("Mango","Perez", capacitacion);

  viculacionUsuario("Mango","Perez", finalizacion);


  if(error){
  viculacionUsuario("Mango","Perez", viculacionUsuario);
  }


  




  // Pasar la función online greet como callback
  registerGuest("Poly", "Colon", function notify(name, LastName) {
    console.log(`Estimado(a) ${name}, su habitación estará lista en 30 minutos.`);
  });












  ///ejemplo 2

  function processCall(recipient, onAvailable, onNotAvailable) {
    // Simular la disponibilidad de los abonados mediante un número aleatorio
    const isRecipientAvailable = Math.random() > 0.5;
  
    if (!isRecipientAvailable) {
      onNotAvailable(recipient);
      return;
    }
  
    onAvailable(recipient);
  }
  
  function takeCall(name) {
    console.log(`Conectando con ${name}, espere...`);
    // La lógica de aceptar una llamada
  }
  
  function activateAnsweringMachine(name) {
    console.log(`El abonado ${name} no esta disponible, deje un mensaje.`);
    // Lógica para activar el contestador automático
  }
  
  function leaveHoloMessage(name) {
    console.log(`El abonado ${name} no esta disponible, grabe un holograma.`);
    // Lógica de grabación de hologramas.
  }
  
  processCall("Mango", takeCall, activateAnsweringMachine);
  processCall("Poly", takeCall, leaveHoloMessage);