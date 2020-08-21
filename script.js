

class Animal {
    constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
    }
}
class Mammal extends Animal {
    constructor(name, type, color) {
        super(name, type, color)
    }

 sound() {
    console.log(`I am a ${this.name} with ${this.type} and ${this.color}`);

    }
}
const cow = new Mammal('shelly', 'cow', 'brown');