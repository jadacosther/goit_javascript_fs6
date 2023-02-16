function showName(firstName, lastName, ...titles) {
    console.log( firstName + ' ' + lastName ); // Julio Cesar
  
    // el resto va en el array titles
    // por ejemplo titles = ["Cónsul", "Emperador"]
    console.log( titles[0] ); // Cónsul
    console.log( titles[1] ); // Emperador
    console.log( titles[5] );
    console.log( titles.length ); // 2
  }
  
  showName("Julio", "Cesar", "Cónsul", "Emperador", "Carlos", "Juan");


// tenemos un array con el nombre y apellido
let arr = ["John", "Smith", "Juan", "Pedro", 23]

// asignación desestructurante
// fija firstName = arr[0]
// y surname = arr[1]
let [,,,surname] = arr;

objeto.name = surname
//console.log(firstName); // John
console.log(surname); // John
