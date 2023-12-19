"use strict"

const body = document.querySelector("body")
const div = document.createElement("div")
div.setAttribute("class","main")
body.append(div)
const form = document.createElement("form")
div.append(form)
const idInp = document.createElement("input")
idInp.setAttribute("Type", "number")
idInp.setAttribute("id", "idinput")
idInp.setAttribute("Placeholder", "Id")
idInp.setAttribute("required","")
const pavInp = document.createElement("input")
pavInp.setAttribute("type","text")
pavInp.setAttribute("id","pavadinimasinput")
pavInp.setAttribute("Placeholder", "Pavadinimas")
pavInp.required=true //turn requered option atleast it should
const kiekInp = document.createElement("input")
kiekInp.setAttribute("type", "number")
kiekInp.setAttribute("id", "kiekisinput")
kiekInp.setAttribute("Placeholder", "kiekis")
kiekInp.required=true
const button = document.createElement("button")
button.setAttribute("type", "submit")
button.setAttribute("value", "submit")
button.innerText="submit"
const buttonE = document.createElement('button')
buttonE.setAttribute("type", "submit")
buttonE.setAttribute("value", "submit")
buttonE.innerText="Edit"
form.append(idInp,pavInp,kiekInp,button,buttonE)
//table strat
const table = document.createElement('table')
table.setAttribute("border", "2")
form.append(table)
table.style.borderRadius="5"
//table end

//lockalstorage start--------
const LSArray = localStorage.getItem("ProductInfo")
const ProductInfo = LSArray===null?[]:JSON.parse(LSArray)

const LSObject = {ProductInfo}
const idArray = []
ProductInfo.sort()


//submiting event
button.addEventListener("click",(el)=>{
    el.preventDefault()
    
    ProductInfo.forEach((el)=>{idArray.push(el.id)})//pushing to id array
    const pordObject ={
        id: idInp.value.trim(),
        name: pavInp.value.trim(),
        quantity: kiekInp.value.trim(),
    } 
    const ifid = idArray.includes(idInp.value)
    if(ifid){alert("this shit already exist")}
    else{
        ProductInfo.push(pordObject)
        localStorage.setItem("ProductInfo", JSON.stringify(ProductInfo))
        //adding new row t o the table 
        const row = document.createElement('tr')
        const p = document.createElement('p')
        const col = document.createElement('td')
        const col1 = document.createElement('td')
        const col2 = document.createElement('td')
                
        table.append(row,col)
        row.append(col,col1,col2)
        col.append(p.innerText=`id:${pordObject.id}   `)
        col1.append(p.innerText=`name:${pordObject.name}   `)
        col2.append(p.innerText=`quantity:${pordObject.quantity}   `)
    
    }
})
//editing event
buttonE.addEventListener("click",(el)=>{
    el.preventDefault()
    const ifid = ProductInfo.findIndex(el=>el.id==idInp.value)
    console.log(ifid);
    // if(ifid){
    // console.log(`yes`);
    // }else{console.log(`no`);}
})
console.log(ProductInfo.findIndex(el=>el))


///keeping table after reload
ProductInfo.forEach((el)=>{
    const row = document.createElement('tr')
    const p = document.createElement('p')
    const col = document.createElement('td')
    const col1 = document.createElement('td')
    const col2 = document.createElement('td')
    
    table.append(row,col)
    row.append(col,col1,col2)
    col.append(p.innerText=`id:${el.id}   `)
    col1.append(p.innerText=`name:${el.name}   `)
    col2.append(p.innerText=`quantity:${el.quantity}   `)
})
