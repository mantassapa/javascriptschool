"use strict"
//pirma skaidre----------
const body = document.querySelector("body")
const div = document.createElement("div")
div.setAttribute("class","PirmaSkaidre")
body.append(div)
const firstButton = document.createElement("button")
firstButton.innerText="Padidinti"
firstButton.style.backgroundColor="red"
firstButton.style.color="white"
const SecondButton = document.createElement("button")
SecondButton.innerText="Sumazinti"
SecondButton.style.backgroundColor="red"
SecondButton.style.color="white"
const parag = document.createElement("p")
let counter = 0
parag.innerText=counter
// parag.style.color="red"
div.append(firstButton,parag,SecondButton)

firstButton.addEventListener("click",(el)=>{
    el.preventDefault()
    counter+=1
    parag.innerText=counter
    if(counter%2==0){
        firstButton.style.backgroundColor="red";
    }else{firstButton.style.backgroundColor="green";}
    
})
SecondButton.addEventListener("click",(el)=>{
    el.preventDefault()
    counter-=1
    parag.innerText=counter
    if(counter%2==0){
        SecondButton.style.backgroundColor="red";
    }else{SecondButton.style.backgroundColor="green";}

})
//pabaiga pirmos skaidres^^^^^^^^^^
//antra skaidre
const div2 = document.createElement('div')
div2.setAttribute('class',"AntraSkaidre")
body.append(div2)
const inputOne = document.createElement('input')
inputOne.setAttribute("type","number")
inputOne.setAttribute("placeholder","nenumeruotu")
const inputTwo = document.createElement('input')
inputTwo.setAttribute("type","number")
inputTwo.setAttribute("placeholder","numeruotu")
const inputButton = document.createElement('button')
inputButton.innerText="Create LIST"
inputButton.style.width="150px"
div2.append(inputOne,inputTwo,inputButton)

inputButton.addEventListener("click",(el)=>{
    el.preventDefault()

    for (let i = 0; i<inputOne.value; i++){ 
        const ul = document.createElement('ul')
        const li = document.createElement('li')
        li.innerText="unordered"
        ul.append(li)
        div2.append(ul)}
const Allli = document.querySelectorAll("li")
for(let i =0;i<inputTwo.value;i++){
        Allli.forEach((el)=>{
            const ol = document.createElement("ol")
            el.append(ol)
            const insideLi = document.createElement("li")
            insideLi.innerText="ordered"
            ol.append(insideLi)

        })

    }
})


