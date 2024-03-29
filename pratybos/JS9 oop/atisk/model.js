"use strict"
export class Animals {
    constructor(name, age, legs, fur, tail){
        this.name= name
        this.age = age
        this.legs=legs
        this.fur=fur
        this.tail=tail
    }
}

function buttons(){
    const body = document.querySelector("body")
    body.style.display="flex"
    body.style.flexDirection="column"
    body.style.alignItems="center"
    body.style.backgroundColor="purple"
    body.style.gap="50px"
    const div = document.createElement("div")
    div.style.display="flex"
    div.style.flexDirection="row"
    div.style.gap="100px"
    div.style.marginBottom="20px"
    div.setAttribute("class", "buttons")
    body.append(div)

    const dog = document.createElement("button")
    dog.setAttribute('id', "dog")
    dog.innerText="dog"
    const cat = document.createElement("button")
    cat.setAttribute('id', "cat")
    cat.innerText="cat"
    const bird = document.createElement("button")
    bird.setAttribute('id', "bird")
    bird.innerText="bird"
    div.append(dog, cat, bird)

    const allBtn = document.querySelectorAll('button')
    allBtn.forEach((el)=>{
        el.style.backgroundColor="violet"
        el.style.borderColor="white"
        el.style.borderRadius="15px"
        el.style.width="100px"
        el.style.height="40px"
    })
}
export {buttons}

function dogforma() {
    const forms = document.querySelectorAll('form')
    forms.forEach((el)=>{el.remove()})
    if(document.getElementById('result')!==null){document.getElementById('result').remove()}
    const body = document.querySelector("body")
    const form = document.createElement("form")
    form.style.display="flex"
    form.style.flexDirection="column"
    form.style.alignItems="center"
    form.style.gap="20px"
    form.style.backgroundColor="black"
    form.style.width="250px"
    form.style.padding="50px"
    form.style.borderRadius="50px"
    const divRes= document.createElement('div')
    divRes.setAttribute("id",'result')
    divRes.style.display="flex"
    divRes.style.flexDirection="row"
    divRes.style.flexWrap="wrap"
    divRes.style.alignItems="center"
    divRes.style.gap="10px"
    body.append(form,divRes)

    const inputName = document.createElement('input')
    inputName.setAttribute('placeholder', "Name")
    inputName.setAttribute('id', "inputName")
    inputName.setAttribute("required","required")
    inputName.setAttribute("type", "text")
    const inputAge = document.createElement('input')
    inputAge.setAttribute('placeholder', "Age")
    inputAge.setAttribute('id', "inputAge")
    inputAge.setAttribute("required","required")
    inputAge.setAttribute("type","number")
    const inputLegs = document.createElement("input")
    inputLegs.setAttribute('placeholder', "Legs")
    inputLegs.setAttribute('id', "inputLegs")
    inputLegs.setAttribute("required","required")
    inputLegs.setAttribute("type","number")
    const inputFur = document.createElement("input")
    inputFur.setAttribute('placeholder', "Fur")
    inputFur.setAttribute('id', "inputFur")
    inputFur.setAttribute("required","required")
    inputFur.setAttribute("type", "text")
    const inputTail = document.createElement("input")
    inputTail.setAttribute('placeholder', "Tail")
    inputTail.setAttribute('id', "inputTail")
    inputTail.setAttribute("required","required")
    inputTail.setAttribute("type", "text")
    const inputMuzzle = document.createElement("input")
    inputMuzzle.setAttribute('placeholder', "Muzzle")
    inputMuzzle.setAttribute('id', "inputMuzzle")
    inputMuzzle.setAttribute("required","required")
    inputMuzzle.setAttribute("type", "text")
    const submit = document.createElement("button")
    submit.setAttribute('id', "submit")
    submit.innerText="submit"
    submit.style.width="50px"
    submit.style.backgroundColor="violet"
    submit.style.borderColor="white"
    submit.style.borderRadius="15px"
    submit.style.width="80px"
    submit.style.height="30px"
    form.append(inputName,inputAge,inputLegs,inputFur,inputTail,inputMuzzle, submit)
    const allInput = document.querySelectorAll('form>input')
    allInput.forEach((el)=>{el.style.textAlign="center" })
}
export{dogforma}
///cat form-----------------------------------------------------------------------
function catforma() {
    const forms = document.querySelectorAll('form')
    forms.forEach((el)=>{el.remove()})
    if(document.getElementById('result')!==null){document.getElementById('result').remove()}
    const body = document.querySelector("body")
    const form = document.createElement("form")
    form.style.display="flex"
    form.style.flexDirection="column"
    form.style.alignItems="center"
    form.style.gap="20px"
    form.style.backgroundColor="grey"
    form.style.width="250px"
    form.style.padding="50px"
    form.style.borderRadius="50px"
    const divRes= document.createElement('div')
    divRes.setAttribute("id",'result')
    divRes.style.display="flex"
    divRes.style.flexDirection="row"
    divRes.style.flexWrap="wrap"
    divRes.style.alignItems="center"
    divRes.style.gap="10px"
    body.append(form,divRes)

    const inputName = document.createElement('input')
    inputName.setAttribute('placeholder', "Name")
    inputName.setAttribute('id', "inputName")
    inputName.setAttribute("required","required")
    inputName.setAttribute("type", "text")
    const inputAge = document.createElement('input')
    inputAge.setAttribute('placeholder', "Age")
    inputAge.setAttribute('id', "inputAge")
    inputAge.setAttribute("required","required")
    inputAge.setAttribute("type","number")
    const inputLegs = document.createElement("input")
    inputLegs.setAttribute('placeholder', "Legs")
    inputLegs.setAttribute('id', "inputLegs")
    inputLegs.setAttribute("required","required")
    inputLegs.setAttribute("type","number")
    const inputFur = document.createElement("input")
    inputFur.setAttribute('placeholder', "Fur")
    inputFur.setAttribute('id', "inputFur")
    inputFur.setAttribute("required","required")
    inputFur.setAttribute("type", "text")
    const inputTail = document.createElement("input")
    inputTail.setAttribute('placeholder', "Tail")
    inputTail.setAttribute('id', "inputTail")
    inputTail.setAttribute("required","required")
    inputTail.setAttribute("type", "text")
    const inputWhiskers = document.createElement("input")
    inputWhiskers.setAttribute('placeholder', "Whiskers")
    inputWhiskers.setAttribute('id', "inputWhiskers")
    inputWhiskers.setAttribute("required","required")
    inputWhiskers.setAttribute("type", "text")
    const submit = document.createElement("button")
    submit.setAttribute('id', "submit")
    submit.innerText="submit"
    submit.style.width="50px"
    submit.style.backgroundColor="violet"
    submit.style.borderColor="white"
    submit.style.borderRadius="15px"
    submit.style.width="80px"
    submit.style.height="30px"
    form.append(inputName,inputAge,inputLegs,inputFur,inputTail,inputWhiskers, submit)
    const allInput = document.querySelectorAll('form>input')
    allInput.forEach((el)=>{el.style.textAlign="center" })
}
export{catforma}
///bird form--------------------------------------------
function birdforma() {
    const forms = document.querySelectorAll('form')
    forms.forEach((el)=>{el.remove()})
    if(document.getElementById('result')!==null){document.getElementById('result').remove()}
    const body = document.querySelector("body")
    const form = document.createElement("form")
    form.style.display="flex"
    form.style.flexDirection="column"
    form.style.alignItems="center"
    form.style.gap="20px"
    form.style.backgroundColor="orange"
    form.style.width="250px"
    form.style.padding="50px"
    form.style.borderRadius="50px"
    const divRes= document.createElement('div')
    divRes.setAttribute("id",'result')
    divRes.style.display="flex"
    divRes.style.flexDirection="row"
    divRes.style.flexWrap="wrap"
    divRes.style.alignItems="center"
    divRes.style.gap="10px"
    body.append(form,divRes)

    const inputName = document.createElement('input')
    inputName.setAttribute('placeholder', "Name")
    inputName.setAttribute('id', "inputName")
    inputName.setAttribute("required","required")
    inputName.setAttribute("type", "text")
    const inputAge = document.createElement('input')
    inputAge.setAttribute('placeholder', "Age")
    inputAge.setAttribute('id', "inputAge")
    inputAge.setAttribute("required","required")
    inputAge.setAttribute("type","number")
    const inputLegs = document.createElement("input")
    inputLegs.setAttribute('placeholder', "Legs")
    inputLegs.setAttribute('id', "inputLegs")
    inputLegs.setAttribute("required","required")
    inputLegs.setAttribute("type","number")
    const inputWings = document.createElement("input")
    inputWings.setAttribute('placeholder', "Wings")
    inputWings.setAttribute('id', "inputWings")
    inputWings.setAttribute("required","required")
    inputWings.setAttribute("type", "text")
    const inputBeak = document.createElement("input")
    inputBeak.setAttribute('placeholder', "Beak")
    inputBeak.setAttribute('id', "inputBeak")
    inputBeak.setAttribute("required","required")
    inputBeak.setAttribute("type", "text")
    const inputWhiskers = document.createElement("input")
    inputWhiskers.setAttribute('placeholder', "Whiskers")
    inputWhiskers.setAttribute('id', "inputWhiskers")
    inputWhiskers.setAttribute("required","required")
    inputWhiskers.setAttribute("type", "text")
    const submit = document.createElement("button")
    submit.setAttribute('id', "submit")
    submit.innerText="submit"
    submit.style.width="50px"
    submit.style.backgroundColor="violet"
    submit.style.borderColor="white"
    submit.style.borderRadius="15px"
    submit.style.width="80px"
    submit.style.height="30px"
    form.append(inputName,inputAge,inputLegs,inputWings,inputBeak, submit)
    const allInput = document.querySelectorAll('form>input')
    allInput.forEach((el)=>{el.style.textAlign="center" })
}
export{birdforma}