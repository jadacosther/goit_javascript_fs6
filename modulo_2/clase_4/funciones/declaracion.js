// function showMessage() {
//     alert( '¡Hola a todos!' );
//   }
  
//   showMessage();

function sumar(a,b,c){
  if(Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)){
    let suma = a + b + c;
    return suma;
  }
  else{
    console.log("los parámetros a, b y c no son valores numéricos")
    return null;
  }
}

let resultadoSuma = sumar(4,5,6)
console.log("resultadoSuma: " + resultadoSuma);
console.log("retorna la funcion : " + sumar(1, 2));
console.log("sin nada de parámetros: " + sumar());
