//Array de objetos
const producyo = [
    { name: 'Esmeralda', price: 1300, quantity: 4 },
    { name: 'Diamante', price: 2700, quantity: 3 },
    { name: 'Zafiro', price: 400, quantity: 7 },
    { name: 'Piedra triturada', price: 200, quantity: 2 },
  ];




const user = Object.freeze({
    name: 'Esmeralda',
    price: 3455
})

user.name = "Sofia"




console.log(user)




//Function parametro de tipo object
function addUsuario(user){
    user.price = 2222;
    return user
}

console.log(stones)