function showName(firstName, lastName, ...titles) {
    console.log( firstName + ' ' + lastName ); // Julio Cesar
  
    // el resto va en el array titles
    // por ejemplo titles = ["Cónsul", "Emperador"]
    console.log( titles[0] ); // Cónsul
    console.log( titles[1] ); // Emperador
    console.log( titles.length ); // 2
  }
  
function ejemplo (argument){
   console.log(argument)
}

ejemplo('jua',2,3,4,5)

  showName("Julio", "Cesar", "Cónsul", "Emperador");


// tenemos un array con el nombre y apellido
let arr = ["John", "Smith"]

// asignación desestructurante
// fija firstName = arr[0]
// y surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // John
alert(surname);  // Smith