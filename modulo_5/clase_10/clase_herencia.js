class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    canta() {
        return `${this.nombre} puede cantar`;
    }
    
    baila() {
        return `${this.nombre} puede bailar`;
    }
}

class Gato extends Animal {
    
    constructor(nombre, edad, colorBigotes) {
        super(nombre, edad);
        this.colorBigotes = colorBigotes;
    }
    
    bigotes() {
        return `Tengo bigotes color ${this.colorBigotes}`;
    }
}

let michin = new Gato("Clara", 33, "índigo");
console.log(michin)