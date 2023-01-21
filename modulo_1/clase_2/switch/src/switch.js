let valor = prompt("Seleccione su opcion", "")

switch (valor) {
     case "1":
          let valor = confirm("LO QUIERE CON LECHE")
          if(valor)
             alert("Usted quiere un Café con leche")
          else
             alert("Usted quiere un Café sin leche")
          break;
     case "2":
         alert("Usted quiere un Chocolate")
         break;
     default:
         alert("Usted quiere un Mocachino")
  };
 

console.log('')