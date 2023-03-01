

function operacionMatematica(a,b,c=0,d, funcion1, funcion2){
         
    funcion2(a, b, mensajeDivision)
    funcion1(c, d)  
}


function multiplicar(a, b){
    console.log(a*b)

}

function dividir(num1, num2, callback){
    let resultado = num1 / num1;
    console.log(resultado)
 
    callback(resultado)
}


function  mensajeDivision(resultado){
    console.log(`el resultado de la operacion division es:${resultado} `)
}


console.log(operacionMatematica(3,12, '', 5, ()=>{}, dividir))