"use strict"
import { Animal } from "./model.js";

const cat = new Animal('Tomas', 10)
cat.setAge()
console.log(cat);
cat.getInfo()

class Dog extends Animal{
    constructor(vardas, amzius, spalva, kojos){
        super(vardas,amzius)
        this.colour= spalva
        this.legs=kojos
    }
    getInfo1(){
        console.log(`mano vardas ${this.name} ir man yra ${this.age}, mano kailio spalva ${this.colour},ir as turiu ${this.legs} kojas`);
    }
}

const sua = new Dog('reksas', 5, "juoda", 4)
sua.setAge()
sua.getInfo1()