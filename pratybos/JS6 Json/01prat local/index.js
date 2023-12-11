"use strict"

let cat = "tom"
localStorage.setItem("katinas", cat)


let fromLS=localStorage.getItem("katinas")
console.log(fromLS);

let dog = "Pluto"

localStorage.setItem("doggy", dog)

const cats={
    cat1: 'tom',
    cat2: "garfield",
    cat3: "Pukis"
}

const dogs = ["Pluto", "Winie", "Blackie"]
localStorage.setItem('catsArray', JSON.stringify(cats)) //be stringify neveikia
localStorage.setItem('dogsArray', JSON.stringify(dogs))

let catsFromLS = JSON.parse(localStorage.getItem("catsArray"))
console.log(catsFromLS);
console.log(catsFromLS.cat2);

const dogs2 = [
{    cat1: 'tom',
    cat2: "garfield",
    cat3: "Pukis"},
{    cat1: 'tom1',
    cat2: "garfield1",
    cat3: "Pukis1"},
{    cat1: 'tom2',
    cat2: "garfield2",
    cat3: "Pukis2"}
]

const dogs2FromLS = JSON.parse(localStorage.getItem("dogsArray"))
console.log(dogs2FromLS);
console.log(dogs2FromLS[1].cat2);

localStorage.removeItem("doggy")

localStorage.clear() //istrina visa storage