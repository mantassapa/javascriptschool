"use strict"
export class Animal {
    constructor(vardas,amzius){
        this.name= vardas
        this.age = amzius
    }
    setAge(){
        this.age++
    }
    getInfo(){
        console.log(`mano vardas ${this.name} ir man yra ${this.age}`);
    }
}