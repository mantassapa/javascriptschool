"use strict"
class Person {
    constructor(vardas, pavarde, amzius, el_pastas){
        this.name=vardas;
        this.surname=pavarde;
        this.age=amzius;
        this.email=el_pastas
    }
    getPersonInfo(){
        console.log(`Mano vardas ${this.name} ${this.surname}, man yra ${this.age}, parsyk man laiska siuo adresu ${this.email}`);

    }
    
}

const jonas = new Person("jonas", "jonaitis", 25, "jonukaslaukia@gmail.com")
const petras = new Person("petras", "petraitis", 32, "petraitislaukia@gmail.com")
const onute = new Person("onute", "onutyte", 30, "onutyte@gmail.com")

console.log(jonas)
jonas.getPersonInfo()
petras.getPersonInfo()
onute.getPersonInfo()


/////////////////////////////
class Animal{
    static greeting(){
        console.log(`I am an animal speciel`);
    }
    hello(){
        console.log(`hello`);
    }
}

const minotauras = new Animal()
console.log(minotauras);

minotauras.hello()

Animal.greeting()

class Student extends Person{
    constructor(vardas, pavarde, amzius, el_pastas, kursas, vidurkis){
        super(vardas, pavarde, amzius, el_pastas)
        this.course=kursas
        this.average=vidurkis
    }
    printStudentInfo(){
        super.getPersonInfo()
        console.log(`Mano vardas ${this.name} ${this.surname}, man yra ${this.age}, email${this.email} mokausi ${this.course}, pazimiu visrkis ${this.average}`);
    }
}
const jonas2 = new Student("jonas", "jonaitis", 25, 'email@w', "javascript", 7.9)
jonas2.printStudentInfo()

class Teacher extends Persons{
    constructor(vardas, pavarde, amzius, el_pastas,dalykas, alga){
        super(vardas, pavarde, amzius, el_pastas)
        this.subject=dalykas
        this.salary=alga
        this.topics=[]
    }
    isHappy(){
        
    }
}