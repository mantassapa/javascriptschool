"use strict"
import { Animals } from "./model.js";
import { buttons } from "./model.js";
import { dogforma } from "./model.js";
import { catforma } from "./model.js";
import { birdforma } from "./model.js";
buttons()
class Dogs extends Animals{
    constructor(name, age, legs, fur, tail, muzzle){
        super(name, age, legs, fur, tail)
        this.Muzzle=muzzle
    }

}

const body = document.querySelector('body')

const dogbutton = document.getElementById('dog')
dogbutton.addEventListener("click", (event)=>{
    event.preventDefault()
    dogforma()

    const submit = document.getElementById("submit")
    const inputName = document.getElementById("inputName")
    const inputAge = document.getElementById("inputAge")
    const inputLegs = document.getElementById("inputLegs")
    const inputfur = document.getElementById("inputFur")
    const inputTail = document.getElementById("inputTail")
    const inputMuzzle = document.getElementById("inputMuzzle")
    const resultDiv = document.getElementById('result')
    
    submit.addEventListener("click", (event)=>{
        event.preventDefault()
        if(inputName.value.trim()!=="" && inputAge.value.trim()!=="" && inputLegs.value.trim()!=="" && inputfur.value.trim()!=="" && inputTail.value.trim()!=="" && inputMuzzle.value.trim()!==""){
            const dog = new Dogs(inputName.value, inputAge.value, inputLegs.value, inputfur.value, inputTail.value,inputMuzzle.value)
            const div = document.createElement('div')
            div.style.backgroundColor="black"
            div.style.color="violet"
            div.style.width="100px"
            div.style.padding="10px"
            div.style.borderRadius="10px"
            resultDiv.append(div)
    
            const parag1 = document.createElement('p')
            parag1.innerText=`name: ${inputName.value}`
            const parag2 = document.createElement('p')
            parag2.innerText=`Age:  ${inputAge.value}`
            const parag3 = document.createElement('p')
            parag3.innerText=`Legs:  ${inputLegs.value}`
            const parag4 = document.createElement('p')
            parag4.innerText=`Fur:  ${inputfur.value}`
            const parag5 = document.createElement('p')
            parag5.innerText=`Tail:  ${inputTail.value}`
            const parag6 = document.createElement('p')
            parag6.innerText=`Muzzle:  ${inputMuzzle.value}`
            div.append(parag1,parag2,parag3,parag4,parag5,parag6)            
        }
        allInput.forEach((el)=>{if(el.value.trim()===""){el.style.borderColor="red"}else{el.style.borderColor="black"}})
    })
})

class Cats extends Animals{
    constructor(name, age, legs, fur, tail, whiskers){
        super(name, age, legs, fur, tail)
        this.Whiskers=whiskers
    }
}

const catbutton = document.getElementById('cat')
catbutton.addEventListener("click", (event)=>{
    event.preventDefault()
    catforma()

    const submit = document.getElementById("submit")
    const inputName = document.getElementById("inputName")
    const inputAge = document.getElementById("inputAge")
    const inputLegs = document.getElementById("inputLegs")
    const inputfur = document.getElementById("inputFur")
    const inputTail = document.getElementById("inputTail")
    const inputWhiskers = document.getElementById("inputWhiskers")
    const resultDiv = document.getElementById('result')
    
    submit.addEventListener("click", (event)=>{
        event.preventDefault()
        if(inputName.value.trim()!=="" && inputAge.value.trim()!=="" && inputLegs.value.trim()!=="" && inputfur.value.trim()!=="" && inputTail.value.trim()!=="" && inputWhiskers.value.trim()!==""){
            const cat = new Cats(inputName.value, inputAge.value, inputLegs.value, inputfur.value, inputTail.value,inputWhiskers.value)
            const div = document.createElement('div')
            div.style.backgroundColor="grey"
            div.style.color="violet"
            div.style.width="100px"
            div.style.padding="10px"
            div.style.borderRadius="10px"
            resultDiv.append(div)
    
            const parag1 = document.createElement('p')
            parag1.innerText=`Name:  ${inputName.value}`
            const parag2 = document.createElement('p')
            parag2.innerText=`Age:  ${inputAge.value}`
            const parag3 = document.createElement('p')
            parag3.innerText=`Legs:  ${inputLegs.value}`
            const parag4 = document.createElement('p')
            parag4.innerText=`Fur:  ${inputfur.value}`
            const parag5 = document.createElement('p')
            parag5.innerText=`Tail:  ${inputTail.value}`
            const parag6 = document.createElement('p')
            parag6.innerText=`Wiskers:  ${inputWhiskers.value}`
            div.append(parag1,parag2,parag3,parag4,parag5,parag6)
            
        }
        allInput.forEach((el)=>{if(el.value.trim()===""){el.style.borderColor="red"}else{el.style.borderColor="black"}})
    })
})

class Birds extends Animals{
    constructor(name, age, legs, wings, beak){
        super(name, age, legs)
        this.Wings=wings
        this.Beak=beak
    }
}

const birdbutton = document.getElementById('bird')
birdbutton.addEventListener("click", (event)=>{
    event.preventDefault()
    birdforma()

    const submit = document.getElementById("submit")
    const inputName = document.getElementById("inputName")
    const inputAge = document.getElementById("inputAge")
    const inputLegs = document.getElementById("inputLegs")
    const inputWings = document.getElementById("inputWings")
    const inputBeak = document.getElementById("inputBeak")
    const resultDiv = document.getElementById('result')
    
    submit.addEventListener("click", (event)=>{
        event.preventDefault()
        if(inputName.value.trim()!=="" && inputAge.value.trim()!=="" && inputLegs.value.trim()!=="" && inputWings.value.trim()!=="" && inputBeak.value.trim()!==""){
            const bird = new Birds(inputName.value, inputAge.value, inputLegs.value, inputWings.value, inputBeak.value)
            const div = document.createElement('div')
            div.style.backgroundColor="orange"
            div.style.color="white"
            div.style.width="100px"
            div.style.padding="10px"
            div.style.borderRadius="10px"
            resultDiv.append(div)
    
            const parag1 = document.createElement('p')
            parag1.innerText=`Name:  ${inputName.value}`
            const parag2 = document.createElement('p')
            parag2.innerText=`Age:  ${inputAge.value}`
            const parag3 = document.createElement('p')
            parag3.innerText=`Legs:  ${inputLegs.value}`
            const parag4 = document.createElement('p')
            parag4.innerText=`Wings:  ${inputWings.value}`
            const parag5 = document.createElement('p')
            parag5.innerText=`Beak:  ${inputBeak.value}`
            div.append(parag1,parag2,parag3,parag4,parag5)
            
        }
        allInput.forEach((el)=>{if(el.value.trim()===""){el.style.borderColor="red"}else{el.style.borderColor="black"}})
    })
})