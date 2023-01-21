let accessAllowed;
alert('Bienvenido a GOIT CLUB');
let age = prompt("Ingrese su Edad", "");
alert('accessAllowed = ' + accessAllowed);

alert(`Bienvenido a GOIT CLUB su edad es ${age}`);

 if (age >= 18 && age < 30) {
    accessAllowed = true;
    alert('accessAllowed = ' + accessAllowed);
    alert("Bienvenido al after party reggaeton!");
} else if(age > 30){
    alert("tiene una copa de wiskey gratis");
    alert("Bienvenido al after party cantina!");
}

else {
  accessAllowed = false;
  alert('accessAllowed = ' + accessAllowed);
  alert("Esperamos volver a ver cuando seas mayor de 18 años!");
}

alert('Acceso : '+ accessAllowed)
