"use strict"
import { Animals } from "./model.js";
import { buttons } from "./model.js";
import { dogforma } from "./model.js";
import { catforma } from "./model.js";
import { birdforma } from "./model.js";
buttons()
dogforma()
class Dogs extends Animals{
    constructor(name, age, legs, fur, tail, muzzle){
        super(name, age, legs, fur, tail)
        this.Muzzle=muzzle
    }
}

const body = document.querySelector('body')
const submit = document.getElementById("submit")
const inputName = document.getElementById("inputName")
const inputAge = document.getElementById("inputAge")
const inputLegs = document.getElementById("inputLegs")
const inputfur = document.getElementById("inputFur")
const inputTail = document.getElementById("inputTail")
const inputMuzzle = document.getElementById("inputMuzzle")
const allInput = document.querySelectorAll("form>input")
const allCardNr=[]

submit.addEventListener("click", (event)=>{
    event.preventDefault()
    if(inputName.value.trim()!=="" && inputAge.value.trim()!=="" && inputLegs.value.trim()!=="" && inputfur.value.trim()!=="" && inputTail.value.trim()!=="" && inputMuzzle.value.trim()!==""){
        const dog = new Dogs(inputName.value, inputAge.value, inputLegs.value, inputfur.value, inputTail.value,inputMuzzle.value)
        console.log(dog);
        const parag = document.createElement('p')
        parag.innerText=`${inputName}:${inputName.value}`
        body.append(parag)
        
    }
    allInput.forEach((el)=>{if(el.value.trim()===""){el.style.borderColor="red"}else{el.style.borderColor="black"}})

    // allInput.forEach()
})

const dogbutton = document.getElementById('dog')
dogbutton.addEventListener("click", (event)=>{
    event.preventDefault()
    // dogforma()
})
const catbutton = document.getElementById('cat')
catbutton.addEventListener("click", (event)=>{
    event.preventDefault()
    // catforma()
})
const birdbutton = document.getElementById('bird')
birdbutton.addEventListener("click", (event)=>{
    event.preventDefault()
    // birdforma()
})

