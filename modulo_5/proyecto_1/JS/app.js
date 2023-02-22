//define globals variables
let inputName = document.getElementById("inputName");
let inputPrice = document.getElementById("inputPrice");
let inputCategory = document.getElementById("inputCategory");
let inputCondition = document.getElementById("inputCondition");
let inputSearch = document.getElementById("inputSearch");
let alertName = document.getElementById("alertName");
let alertPrice = document.getElementById("alertPrice");
let alertCategory = document.getElementById("alertCategory");
let alertCondition = document.getElementById("alertCondition");
let btnAdd = document.getElementById("btnAdd");
let btnClear = document.getElementById("btnClear");
let tableBody = document.getElementById("tableBody");
let inputColumn = document.getElementById("inputColumn");
let optionSortByName = document.getElementById("sortByName");
let currentIndex = 0;
let products = [];

//Initial storage document JSON in LocalStorage
if (JSON.parse(localStorage.getItem("Products")) !== null) {
  products = JSON.parse(localStorage.getItem("Products"));
  displayProduct(products);
}

btnAdd.addEventListener("click", (_) => {
  if (validName() && validPrice() && validCategory() && validCondition()) {
    if (btnAdd.innerHTML === "Add Product") {
      let product = {
        name: inputName.value,
        price: inputPrice.value,
        category: inputCategory.value,
        condition: inputCondition.value,
      };
      products.push(product);
      localStorage.setItem("Products", JSON.stringify(products));
      displayProduct(products);
      clearForm();
      inputName.classList.remove("is-valid");
      inputPrice.classList.remove("is-valid");
      inputCategory.classList.remove("is-valid");
      inputCondition.classList.remove("is-valid");
    } else if (btnAdd.innerHTML === "Update Product") {
      updateProduct();
      clearForm();
      inputName.classList.remove("is-valid");
      inputPrice.classList.remove("is-valid");
      inputCategory.classList.remove("is-valid");
      inputCondition.classList.remove("is-valid");
    }
  }
});

function displayProduct(products) {
  let temp = "";
  let conditionRow = "";
  products.forEach((product, i) => {

    if (product.condition === "Excellent") {
      conditionRow = `<td class="text-white bg-success">${product.condition}</td>`;
    } else if (product.condition === "Good") {
      conditionRow = `<td class="text-white bg-warning">${product.condition}</td>`;
    } else if (product.condition === "Bad") {
      conditionRow = `<td class="text-white bg-danger">${product.condition}</td>`;
    }
    temp += `
        <tr>
            <td>${i + 1}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.category}</td>
            ${conditionRow}
            <td>
                <i onclick="getProductInformation(${i})" title="Update" class="fa-solid me-2 text-warning fa-pen"></i>
                <i onclick="deleteProduct(${i})" title="Delete" class="fa-solid text-danger fa-trash"></i>
            </td>
        </tr>`;
  });
  tableBody.innerHTML = temp;
}


btnClear.addEventListener("click", clearForm);

function clearForm() {
  inputName.value = "";
  inputPrice.value = "";
  inputCategory.value = "";
  inputCondition.value = "";
  inputName.classList.remove("is-valid");
  inputName.classList.remove("is-invalid");
  alertName.classList.replace("d-block", "d-none");
  inputPrice.classList.remove("is-valid");
  inputPrice.classList.remove("is-invalid");
  alertPrice.classList.replace("d-block", "d-none");
  inputCategory.classList.remove("is-valid");
  inputCategory.classList.remove("is-invalid");
  alertCategory.classList.replace("d-block", "d-none");
  inputCondition.classList.remove("is-valid");
  inputCondition.classList.remove("is-invalid");
  alertCondition.classList.replace("d-block", "d-none");
}

function getProductInformation(index) {
  currentIndex = index;
  inputName.value = products[currentIndex].name;
  inputPrice.value = products[currentIndex].price;
  inputCategory.value = products[currentIndex].category;
  inputCondition.value = products[currentIndex].condition;
  btnAdd.classList.replace("btn-success", "btn-warning");
  btnAdd.innerHTML = "Update Product";
  inputName.classList.remove("is-invalid");
  alertName.classList.replace("d-block", "d-none");
  inputPrice.classList.remove("is-invalid");
  alertPrice.classList.replace("d-block", "d-none");
  inputCategory.classList.remove("is-invalid");
  alertCategory.classList.replace("d-block", "d-none");
  inputCondition.classList.remove("is-invalid");
  alertCondition.classList.replace("d-block", "d-none");
}

function updateProduct() {
  let product = {
    name: inputName.value,
    price: inputPrice.value,
    category: inputCategory.value,
    condition: inputCondition.value,
  };
  products[currentIndex] = product;
  displayProduct(products);
  localStorage.setItem("Products", JSON.stringify(products));
  btnAdd.classList.replace("btn-warning", "btn-success");
  btnAdd.innerHTML = "Add Product";
}

function deleteProduct(index) {
  products.splice(index, 1);
  displayProduct(products);
  localStorage.setItem("Products", JSON.stringify(products));
}

inputSearch.addEventListener("keyup", _ => {
    let searchProducts = products.filter(product => product[inputColumn.value].toLowerCase().includes(inputSearch.value.toLowerCase()))
    displayProduct(searchProducts);
 });


inputName.addEventListener("keyup", validName);
inputPrice.addEventListener("keyup", validPrice);



function validName() {
  let regex = /^[A-Z][a-zA-Z0-9 ]+$/;
  if (regex.test(inputName.value)) {
    inputName.classList.add("is-valid");
    inputName.classList.remove("is-invalid");
    alertName.classList.replace("d-block", "d-none");
    return true;
  } else {
    inputName.classList.add("is-invalid");
    inputName.classList.remove("is-valid");
    alertName.classList.replace("d-none", "d-block");
    return false;
  }
}

function validPrice() {
  let regex = /^[1-9][0-9]{2,}$/;
  if (regex.test(inputPrice.value)) {
    inputPrice.classList.add("is-valid");
    inputPrice.classList.remove("is-invalid");
    alertPrice.classList.replace("d-block", "d-none");
    return true;
  } else {
    inputPrice.classList.add("is-invalid");
    inputPrice.classList.remove("is-valid");
    alertPrice.classList.replace("d-none", "d-block");
    return false;
  }
}

function validCategory() {
  if (inputCategory.value === "") {
    inputCategory.classList.add("is-invalid");
    inputCategory.classList.remove("is-valid");
    alertCategory.classList.replace("d-none", "d-block");
    return false;
  } else {
    inputCategory.classList.add("is-valid");
    inputCategory.classList.remove("is-invalid");
    alertCategory.classList.replace("d-block", "d-none");
    return true;
  }
}

function validCondition() {
  if (inputCondition.value === "") {
    inputCondition.classList.add("is-invalid");
    inputCondition.classList.remove("is-valid");
    alertCondition.classList.replace("d-none", "d-block");
    return false;
  } else {
    inputCondition.classList.add("is-valid");
    inputCondition.classList.remove("is-invalid");
    alertCondition.classList.replace("d-block", "d-none");
    return true;
  }
}


optionSortByName.addEventListener("click", _ => {
  products.sort((firstProduct, SecondProduct)=>{
    return firstProduct.name.localeCompare(SecondProduct.name)
  })
  displayProduct(products);
});

