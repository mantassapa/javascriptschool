"use strict"
const divDoc = document.querySelector("div")
console.log(divDoc);

const divDoc1 = document.querySelector(".div1")//pagal class
const divDoc2 = document.querySelector("#div1")//pagal id
console.log(divDoc1, divDoc2);

const byID = document.getElementById("div1")// pagal id
console.log(byID);

const byClass = document.getElementsByClassName("div1")//pagal class
console.log(byClass);

const arr = document.querySelectorAll('div')
console.log(arr);

const byTag = document.getElementsByTagName("div")
console.log(byTag);

const child = document.querySelector("p")
console.log(child);

const child1 = document.querySelector("div").childNodes// vaikinis elementas
console.log(child1);

const child2 = document.querySelectorAll("div > p")// vaikinis elementas
console.log(child2);

const fChild1 = document.querySelector("div > p")
console.log(fChild1);

const fChild2 = document.querySelector("div > p")
// console.log(fChild2, child2[1]);

fChild2.setAttribute("id", "PirmasP")// pakeicia atributes

child1[1].className="antrasP"
console.log(fChild1, child2[1])
// fChild1.removeAttribute('id')

const attr = fChild1.getAttribute("id")
console.log(attr);

child2[1].classList.add("myClassInCss")
child2[1].classList.remove("myClassInCss")
child2[1].classList.replace("antrasP","myClassInCss")
child2[1].style.color="red"
child2[1].style.backgroundColor="violet"

// divDoc.insertAdjacentElement("beforebegin", mybutton)//berorebegin , afterbegin
divDoc.innerHTML +="<span>cia yra span</stan>"


const mybutton = document.createElement("button")
const img = document.createElement("img")
console.log(mybutton);

//varijantai kaip iterti teksta
mybutton.innerText = "click"
// mybutton.textContent = "click"
// mybutton.innerHTML = "click"


divDoc.appendChild(mybutton)
divDoc.append(mybutton, img)

// const span = ducument.querySelector("span");
// span.remove();
mybutton.style.backgroundColor="violet"

const clicker=() => {
    if (mybutton.style.backgroundColor==="red"){
        mybutton.style.backgroundColor="blue"
    }else{
        mybutton.style.backgroundColor="red"
    }
}
//removeEventListener panaikina 
mybutton.addEventListener("click",clicker)
// mybutton.removeEventListener("click", clicker)

const mybutton2 = document.createElement("button")
mybutton2.innerText="click2"
const mybutton3 = document.createElement("button")
mybutton3.innerText="click3"
const mybutton4 = document.createElement("button")
mybutton4.innerText="click4"

divDoc.append(mybutton2,mybutton3,mybutton4)
const buttonsGroups=document.querySelectorAll('button')
console.log(buttonsGroups);

buttonsGroups.forEach((el, ind) => el.addEventListener("click", ()=>{
    console.log(`you clicked button ${el.innerText}`)
}))

// event.value
//event.target

const forma = document.querySelector('form')
const inputas = document.querySelector("input")
const submitas = document.querySelector("form > button")
console.log(forma, inputas, submitas);

const array = []
let counter = 0
submitas.addEventListener("click",(event)=>{
    event.preventDefault()

    const inputeValue = inputas.value
    console.log(inputeValue);
    counter++
    const persons = {
        id: counter,
        name: inputeValue
    }

    array.push(persons)

    localStorage.setItem("zmones", JSON.stringify(array))
    // inputas.value=""
    forma.reset()
})
submitas.addEventListener("click", (e)=>{
    e.preventDefault()
    console.log(e.target);
})


const editInput = document.querySelector("#edit")
const editas = document.querySelector("#editbutton")
console.log(editInput, editas);

editas.addEventListener("click", (e) =>{
    e.preventDefault()
    
    const editable = parseInt(editInput.value)
    console.log(editable);

const fromLS = JSON.parse(localStorage.getItem("zmones"))
console.log(fromLS);

const founded = fromLS.findIndex(el=> el.id ===editable)
console.log(founded);
})
inputas.value=fromLS[founded].name

