class CoffeeMachine {
    _waterAmount = 0;

    constructor(power) {
        this._power = power;
      }
  
    set waterAmount(value) {
      if (value < 0) {
        value = 0;
      }
      this._waterAmount = value;
    }
  
    get waterAmount() {
      return this._waterAmount;
    }
  
  }
  
  // se crea la máquina de café
  let coffeeMachine = new CoffeeMachine(100);
  
  // agregar agua
  coffeeMachine.waterAmount = 23;

  console.log(coffeeMachine)