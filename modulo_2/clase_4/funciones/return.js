function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('¿Tienes permiso de tus padres?');
    }
  }
  

  let age = prompt('¿Qué edad tienes?', 18);
  
  if ( checkAge(age) ) {
    alert( 'Acceso otorgado' );
  } else {
    alert( 'Acceso denegado' );
  }