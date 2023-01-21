//¿Cómo puedo hacer que el método "ordenar" no modifique el arreglo original?

//Array.sort()


//El método Array.find() toma una función de devolución de llamada como parámetro y ejecuta esa función una vez para cada elemento presente en la matriz, hasta que encuentra una donde la función devuelve un valor verdadero.
//Si se encuentra el elemento, devuelve el valor del elemento, de lo contrario se devuelve undefined.


var arr = [ 'a', 'b', 'Z', 'Aa', 'AA' ];
arr.sort();  //[ 'AA', 'Aa', 'Z', 'a', 'b' ]


