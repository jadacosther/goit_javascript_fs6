const messagePost = {
    foodName: "Atun",
    quantity: "100",
    createTillNow: "Muiskas",
    predicted: "muis",
    status: "Activo"
};

const options = {
  method: "POST",
  body: JSON.stringify(messagePost),
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

fetch("http://localhost:8080/api/foods", options)
  .then(response => response.json())
  .then(post => console.log(post))
  .catch(error => console.log(error));



