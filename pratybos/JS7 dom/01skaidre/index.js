"use strict"
//01 Sukurti elementa ir ji ideti i savo sugalvota teksta
const div = document.querySelector('div')
// console.log(div);

const parag = document.createElement('p')
div.append(parag)
parag.innerText = "savo sugalvota teksta"
//02 Sukurti elementa ir ji patalpinti i kita elementa su tekstu
const p = document.querySelector("p")
const span = document.createElement("span")
p.append(span)
span.innerText = "span elementas"
//03 Pasizymeti elementa ir jam prideti atributa su reiksme
div.setAttribute("Class", "myClass")
p.setAttribute("id", "myId")
const a = document.createElement("a")
div.append(a)
a.setAttribute("href", "#")
const img = document.createElement("img")
div.append(img)
img.setAttribute("scr", "#")
//04 sukurti keleta p tagu div viduje, pazimyte elementu masyva ir prideti jiems stiliu
//kas antro elemento raudonas tekstas su juodaisbackground, likusiu, tekstas baltas, bacground zalias
const p1 = document.createElement('p')
div.append(p1)
const p2 = document.createElement('p')
div.append(p2)
const p3 = document.createElement('p')
div.append(p3)
const p4 = document.createElement('p')
div.append(p4)
const p5 = document.createElement('p')
div.append(p5)
const masyvas = [p1,p2,p3,p4,p5]
const masyvoIlgis = masyvas.length

for (let index=0; index<masyvoIlgis; index+=1){
masyvas[index].innerText="this is the new text"
masyvas[index].style.backgroundColor="green"
masyvas[index].style.color="white"
}
for (let index=0; index<masyvoIlgis; index+=2){
masyvas[index].innerText="this is the new text"
masyvas[index].style.backgroundColor="black"
masyvas[index].style.color="red"
}
//04 su foreac
// array.forEach((el, index) =>{
//     if(index%2===0){
//         el.style.color = 'red'
//         el.style.backgroundColor="black"
//     }else{
//         el.style.color = 'white'
//         el.style.backgroundColor="green"
//     }
// })

//05
const body = document.querySelector('body')
const form = document.createElement('form')
body.insertAdjacentElement("afterbegin",form)
console.log(form);
const input = document.createElement('input')//input
form.append(input)
input.setAttribute("type","text")
const button = document.createElement("button")//button
form.append(button)
button.setAttribute("type", "submit")
button.innerText="Click me"

const submit = document.querySelector('form > button')
submit.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(input.value);
    p.innerText=(input.value)
})

//06
