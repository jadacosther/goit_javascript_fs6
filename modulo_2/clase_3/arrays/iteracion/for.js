
const persona = {
 name: "Juan",
 apellido: "Alvarez",
 edad: 26,
 
 caminar: function(){
     console.log("Juan está caminado")
 }

}

console.log(persona.hasOwnProperty("documento"))

persona['documento'] = 23445566433


console.log(persona.hasOwnProperty("documento"))
