class User {
    // Declaración opcional de propiedades públicas
    name;
    // Declaración obligatoria de propiedades privadas
    #email;
    
    lastName;

    numberPhone;
  
    constructor({name, email}) {
        this.name = name;
        this.#email = email;
    } 

    getEmail() {
      return this.#email;
    }
  
    changeEmail(newEmail) {
      this.#email = newEmail;
    }
  }
  
  const mango = new User({
    name: "mango",
    email: "mango@mail.com",
  });

  const poly = new User();

  mango.changeEmail("mango@supermail.com");
  
  console.log(mango.getEmail()); // mango@supermail.com
  