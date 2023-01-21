const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message;

for (const client of clients) {
  // At each iteration, check if the array element matches
  // client's name. If it matches, then log a message
  // and make a break so as not to look further
  if (client === clientNameToFind) {
    message = "Client name exists in the database!";
    break;
  }

  // If no match is found, create a message saying that there is no such a name
  message = "Client name does not exist in the database!";
}

console.log(message); // "Client name exists in the database!"