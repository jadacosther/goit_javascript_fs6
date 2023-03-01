class User {
   name;
   lastName;

    constructor(name, lastName) {
      this.name = name;
      this.lastName = lastName;
    }
  }
  
  let user1 = new User('Jose', 'Paredes');
  let user2 = new User('Pablo', 'Pinto');

  console.log(user1)
  console.log(user2)