let user = { 
    name: "John" 
};
let admin = user;

admin.name = "Pete"; // cambiado por la referencia "admin"

console.log(user.name); // Pete


let clone = structuredClone(user); // clonar objetos

