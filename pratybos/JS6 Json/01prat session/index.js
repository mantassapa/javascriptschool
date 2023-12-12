"use strict"
// naudojimas session storage yra toks pats kaip local storage tik vietoje local reikia parasyti session

// let cat = "tom"
// sessionStorage.setItem("katinas", cat)

// let fromLS=sessionStorage.getItem("katinas")
// console.log(fromLS);


//tikrinimas ar nera tuscia sessional storage
localStorage.clear()

// const dataFromLS = JSON.parse(localStorage.getItem("persons"))
// // console.log(dataFromLS);

// const data = dataFromLS===null ? [] : dataFromLS;
// // console.log(data);

// const person ={
//     name: 'john',
//     lastname: 'doe'
// }

// data.push(person)
// // console.log(data);

// localStorage.setItem("persons", JSON.stringify(data))

// const dataFromLS1= JSON.parse(localStorage.getItem("persons"))
// // console.log(dataFromLS1);

// const data1 = dataFromLS1===null ? [] : dataFromLS1;
// // console.log(data1);

// data1.push(person)
// localStorage.setItem("persons", JSON.stringify(data1))

// const dataFromLS2 = JSON.parse(localStorage.getItem("persons"))
// console.log(dataFromLS2);

// // const newArray = dataFromLS2.find((elementas) => elementas.name===person.name && elementas.lastname===person.lastname)

// const newArray = dataFromLS2.find((elementas) => elementas.name === "john" && elementas.lastname === "doe")
// console.log(newArray);

// const person1 ={
//     name: 'Aetras',
//     lastname: 'do'
// }

// if (newArray){
//     alert('toks jau yra')
// }else {
//     dataFromLS2.push(person1)
//     localStorage.setItem("persons", JSON.stringify(dataFromLS2))
//     alert("naujas irasas isaugotas")
// }

const duomenys = localStorage.getItem("persons")

const atsakymas = duomenys === null ? [] :JSON.parse(duomenys)

const person = {
    name:"John",
    lastname: "Doe"
}

const ieskomas = atsakymas.find((el) => el.name === person.name && el.lastname === person.lastname)
console.log(ieskomas);

if(ieskomas){
    alert("toks jau yra")
}else{
    atsakymas.push(person)
    localStorage.setItem("persons", JSON.stringify(atsakymas))
    alert("Naujas irasas patalpintas LS")
}

const duomenysIsLS = JSON.parse(localStorage.getItem("persons"))

const person1 = {
    name:"Jane",
    lastname: "Doe"
}

const ieskomas1 = atsakymas.find((el) => el.name === person1.name && el.lastname === person1.lastname)
console.log(ieskomas1);

if(ieskomas){
    alert("toks jau yra")
}else{
    duomenysIsLS.push(person1)
    localStorage.setItem("persons", JSON.stringify(duomenysIsLS))
    alert("Naujas irasas patalpintas LS")
}