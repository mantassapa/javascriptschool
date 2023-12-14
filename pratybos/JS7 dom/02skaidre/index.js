"use strict"
const body = document.querySelector('body')
const div1 = document.createAttribute("div")
const div = document.querySelector("div")
body.addEventListener("afterprint", div)
const p1 = document.createElement("p")
p1.textContent="tekstas"
const p2 = document.createElement("p")
p2.textContent="tekstas"
const p3 = document.createElement("p")
p3.textContent="tekstas"
const p4 = document.createElement("p")
p4.textContent="tekstas"
const p5 = document.createElement("p")
p5.textContent="tekstas"
div.append(p1,p2,p3,p4,p5)

//3
p1.setAttribute("class","p1")
p2.setAttribute("id","p2")
p3.setAttribute("class","p3")
p4.setAttribute("id","p4")
p5.setAttribute("id","p5")

const div2 = document.createElement("div")
const div3 = document.createElement("div")
const div4 = document.createElement("div")
const div5 = document.createElement("div")
const div6 = document.createElement("div")
div.append(div2,div3,div4,div5,div6)

const divs= document.querySelectorAll("div>div")
divs.forEach((el)=>{
    el.style.width="50px"
    el.style.height="40px"
})

const button = document.createElement("button")
div.append(button)

button.innerText ="click"

button.addEventListener("click", (event)=>{
    event.preventDefault()
    
    divs.forEach((el)=>{
        const random = Math.floor(Math.random()*16777215).toString(16);
        el.style.backgroundColor = '#' + random
    })
})

//6
const wordsContainer = document.getElementById('words')
const masyvas = ['obuolys', "kriause", 'apelsinas', "vynuoges", "bananai", "mantarinai"]

const random1 = (array)=>{
    const randIndex = Math.floor(Math.random() * array.length)
    return array[randIndex]
}
for (let i = 0; i < masyvas.length; i++) {
    const pElement = document.createElement("p");

    let randomWord = random1(masyvas)

    pElement.innerText=randomWord
    
    wordsContainer.appendChild(pElement)
}
//7
const button1 = document.createElement('button')
button1.innerText="create table"
const inputRows = document.createElement('input')
inputRows.placeholder = "eilutes"
const inputColumns = document.createElement('input')
inputColumns.placeholder = "stulpeliai"
const container = document.createElement('div')
container.append(button,inputRows,inputColumns)
document.body.append(container)
const tableConatiner = document.getElementById('tableContainer')

button.addEventListener("click", (event) => {
    event.preventDefault();
    const tableCheck = document.querySelector("table")
    if(tableCheck){
        tableCheck.remove()
    }
    const table = document.createElement("table")
    const tableBody = document.createElement("tbody")
    const eilSk = inputRows.value // eilSk talpina ivesta value i langelius
    const stulpSk = inputColumns.value // stulpSk talpina ivesta value i langelius
 
    for (let i = 0; i<eilSk; i++){
        const row = document.createElement("tr") // kuria eilutes
   
    for (let j = 0; j<stulpSk; j++){
        const cell = document.createElement("td") // kuria stulpelius
        const cellText = document.createTextNode(`cell in row ${i}, column ${j}`)
        cell.appendChild(cellText)
        row.appendChild(cell)
    }
    tableBody.appendChild(row)
    }
    table.appendChild(tableBody)
    document.body.appendChild(table)
    table.setAttribute("border", "2") // del vizualo
})
