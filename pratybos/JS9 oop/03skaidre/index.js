"use strict"
import { Reader } from "./model.js"
import { forma } from "./model.js"
forma()
const submit = document.getElementById("submit")
const inputName = document.getElementById("inputName")
const inputSur = document.getElementById("inputSur")
const inputNr = document.getElementById("inputNr")
const inputBook = document.getElementById("inputBook")
const allInput = document.querySelectorAll("form>input")
const allCardNr=[]

const LSArray = localStorage.getItem('allReader')
const allReader = LSArray===null?[]:JSON.parse(LSArray)
allReader.forEach((el)=>{console.log(el.card_nr)})
// console.log(allReader.map(card_nr));

console.log(allReader);
submit.addEventListener("click", (event)=>{
    event.preventDefault()
    if(inputName.value.trim()!=="" && inputSur.value.trim()!=="" && inputNr.value.trim()!=="" && inputBook.value.trim()!==""){
        const reader = new Reader(inputName.value, inputSur.value, inputNr.value, inputBook.value)
        allReader.forEach((el)=>{if(el.card_nr===inputNr.value){allCardNr.push(el.card_nr)}})
        allReader.push(reader)
        localStorage.setItem("allReader", JSON.stringify(allReader))
        console.log(allReader);
        
    }
    allInput.forEach((el)=>{if(el.value.trim()===""){el.style.borderColor="red"}else{el.style.borderColor="black"}})

    // allInput.forEach()
})
//well you know
