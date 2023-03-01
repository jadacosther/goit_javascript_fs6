let nombreUsuario = "Juan"

let usuario = {
  nombreUsuario: "Carlos",
  realizarLlamada: function(numeroTelefono) {
    console.log(
      `realizando llamada al usuario: ${this.nombreUsuario} con número: ${numeroTelefono} ...`
    );
  },
};


function colgarLlamada(numeroTelefono){
    console.log(
        `finalizando llamada del usuario: ${this.nombreUsuario} con número: ${numeroTelefono} ...`
      );   
}


usuario.realizarLlamada("3214676363");
let resultado  = colgarLlamada.bind(usuario, "3214676363")

resultado()
