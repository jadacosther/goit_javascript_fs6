function showMessage() {
    let message = "Hola, ¡Soy JavaScript!"; // variable local
  
    alert( message );
  }
  
  showMessage(); // Hola, ¡Soy JavaScript!
  alert( message ); // <-- ¡Error! La variable es local para esta función