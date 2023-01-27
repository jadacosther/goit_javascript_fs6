 "use strict" 
 
 var edad;

  function showMessage(from, text = undefined || "sin texto" , num = 0) {
      let edad = num;
      if(text == "sin texto"){
        text = mensajeDefecto(text)
      }

      console.log( from + ": " + text + " - " + num );
      return edad
  }
 

console.log(showMessage("Ann",null,45) + " - " +  showMessage("Ann","",98) + " - " + showMessage("Ann","", 34)) ; // Ann: sin texto

console.log("Edad: " + edad)

  function mensajeDefecto(mensaje){
    let edad = 50;
    return mensaje + ": Por favor digite un texto!"
  }



//sumar(1,2,4,5,6,7,9,10,23)


// function sumar(){
//   console.log(arguments)
//   let total = 0;
//   for(let arg of arguments){
//       total += arg  
//   }
//   console.log(total)
// }

// function sumar(a, b){
//   console.log(arguments)
//   let total = 0;
//   for(let arg of arguments){
//       total += arg  
//   }
//   console.log(total)
// }
