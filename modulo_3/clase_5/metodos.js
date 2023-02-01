const objeto = {
    nombre: "Meredith Grey",
    edad: 32,
    trabajo: "Cirujana",
    saludar: function () {
      console.log(`Hola soy ${objeto.nombre} y soy ${objeto.trabajo}`)
    },
  }
  
  console.log(objeto.nombre) // 'Meredith Grey'
  console.log(objeto.edad) // 32
  console.log(objeto["saludar"]) // [Function: saludar]