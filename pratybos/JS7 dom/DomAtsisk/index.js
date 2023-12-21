"use strict"
//pirma uzduotis...
const body = document.querySelector("body")
const div = document.createElement("div")
const main = document.createElement('main')
div.setAttribute("class","PirmaSkaidre")
body.append(main)
main.append(div)
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
//pabaiga pirmos uzduoties^^^^^^^^^^
//antra uzduotis...
const div2 = document.createElement('div')
div2.setAttribute('class',"AntraSkaidre")
main.append(div2)
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
    const allul = document.querySelectorAll('ul')
    allul.forEach((el)=>{el.remove()})///resetina 

    for (let i = 0; i<inputOne.value; i++){ 
        const ul = document.createElement('ul')
        const li = document.createElement('li')
        li.innerText="unordered"
        ul.append(li)
        div2.append(ul)
        const ol = document.createElement("ol")
        
        for(let i =0;i<inputTwo.value;i++){
            li.append(ol)
            const insideLi = document.createElement("li")
            insideLi.innerText="ordered"
            ol.append(insideLi)
                }
    }
})
//antros uzduoties pabaiga^^^^^^^^^^^^^^^
//trecia uzduotis...


const form = document.createElement('form')
main.append(form)
const h2 = document.createElement('h2')
h2.innerText="TODO"
const inputText = document.createElement('input')
inputText.setAttribute('type', 'text')
inputText.setAttribute('placeholder', 'task')
inputText.setAttribute('required', '')
const select = document.createElement('select')
const FormButton = document.createElement('button')
FormButton.innerText="Submit"
form.append(h2,inputText,select,FormButton)
//options-
const OptionA = document.createElement('option')
OptionA.innerText="--Select priority--"
OptionA.setAttribute('value','none')
const OptionLow = document.createElement('option')
OptionLow.setAttribute('value',"Low")
OptionLow.innerText="Low"
const OptionMedium = document.createElement('option')
OptionMedium.setAttribute('value',"Medium")
OptionMedium.innerText="Medium"
const OptionHigh = document.createElement('option')
OptionHigh.setAttribute('value',"High")
OptionHigh.innerText="High"
select.append(OptionA,OptionLow,OptionMedium,OptionHigh)
//start with localstorage

const LSArray = localStorage.getItem('Todo')
const Todo = LSArray===null?[]:JSON.parse(LSArray)
let TodoLength=0
let idnumber = 0
let rowidnumber = 0

//table creating
const table = document.createElement('table')
table.setAttribute('border',"5")
main.append(table)
Todo.forEach((el)=>{TodoLength++})//counting Todo lenght
if(TodoLength===0){table.remove()}


//after reload-----------
const LSCcheckArray = localStorage.getItem('CheckArray')
const CheckArray = LSCcheckArray===null?[]:JSON.parse(LSCcheckArray)

//after reload table rows and columns
Todo.forEach((el, index)=>{
    const row = document.createElement('tr')
    const p = document.createElement('p')
    const col = document.createElement('td')
    const col2 = document.createElement('td')
    const colChexbox = document.createElement('td')
    const colButton = document.createElement('td')
        
    table.append(row,col)
    row.append(col,col2,colChexbox,colButton)
    col.append(p.innerText=`task:${el.task}   `)
    col2.append(p.innerText=`priority:${el.priority}   `)
    //checkbox ==
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', "checkbox")
    checkbox.setAttribute('class','check')
    colChexbox.append(checkbox)
    //delete button==
    const delbutton = document.createElement("button")
    delbutton.setAttribute('class','delete')
    delbutton.innerText="delete"
    colButton.append(delbutton)

    // checkbox event listener==
    idnumber++
    checkbox.setAttribute('id', idnumber)
    const idinfo = checkbox.getAttribute('id')
    const ifid = CheckArray.includes(idinfo)

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            row.style.backgroundColor="green"
            if(CheckArray.includes(idinfo)){
            }else(CheckArray.push(idinfo))  
        } else {
            const indexas = CheckArray.indexOf(idinfo)
            if(indexas>=0){
                CheckArray.splice(indexas, 1)
            }
        row.style.backgroundColor="white"
      }

    //   checkbox.checked=true
      localStorage.setItem('CheckArray', JSON.stringify(CheckArray))
      
    });
    // data after reload==
    if(CheckArray.includes(idinfo)){
        row.style.backgroundColor="green"
        checkbox.checked=true
    }

    //delete button event==
    row.setAttribute("id", rowidnumber++)
    const rowidinfo = row.getAttribute("id")
    const rowifid = Todo.includes(rowidinfo)
    const indexas = Todo.indexOf(el)

    console.log(indexas);
    delbutton.addEventListener('click',(el)=>{
        el.preventDefault()
        if(indexas>=0){
        // rowidnumber--
        Todo.splice(indexas,1)
        row.remove()
        }
        localStorage.setItem('Todo', JSON.stringify(Todo))
    })

})//todo (after reload) close


//event lisener
FormButton.addEventListener("click",(el)=>{
    el.preventDefault()
    // if(TodoLength>)
    const LSObject = {
        task: inputText.value.trim(),
        priority: select.value
    }
    if(inputText.value!==''){
        if(select.value!=='none'){
            Todo.push(LSObject)
            localStorage.setItem("Todo", JSON.stringify(Todo))
            //adding rows and lomuns
            const row = document.createElement('tr')
            const p = document.createElement('p')
            const col = document.createElement('td')
            const col2 = document.createElement('td')
            const colChexbox = document.createElement('td')
            const colButton = document.createElement('td')
            //checkbox ==
            const checkbox = document.createElement('input')
            checkbox.setAttribute('type', "checkbox")
            checkbox.setAttribute('class','check')
            colChexbox.append(checkbox)
            //delete button==
            const delbutton = document.createElement("button")
            delbutton.setAttribute('class','delete')
            delbutton.innerText="delete"
            colButton.append(delbutton)
                    
            table.append(row,col)
            row.append(col,col2,colChexbox,colButton)
            col.append(p.innerText=`task:${LSObject.task}   `)
            col2.append(p.innerText=`priority:${LSObject.priority}   `)
            
            TodoLength++

//-------------after reload pataisyta kodo dalis-------
            //checkbox event listener=
            checkbox.setAttribute('id', idnumber++)
            const idinfo = checkbox.getAttribute('id')
            const ifid = CheckArray.includes(idinfo)
        
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    row.style.backgroundColor="green"
                    if(CheckArray.includes(idinfo)){
                    }else(CheckArray.push(idinfo))  
                } else {
                    const indexas = CheckArray.indexOf(idinfo)
                    if(indexas>=0){
                        CheckArray.splice(indexas, 1)
                    }
                row.style.backgroundColor="white"
              }
              localStorage.setItem('CheckArray', JSON.stringify(CheckArray))
              
            });
            // data after reload==
            if(CheckArray.includes(idinfo)){
                row.style.backgroundColor="green"
                checkbox.checked==true
            }
        
            //delete button event==
            row.setAttribute("id", rowidnumber++)
            const rowidinfo = row.getAttribute("id")
            const indexas = Todo.indexOf(el)

            console.log(indexas.indexOf(rowidinfo));
            delbutton.addEventListener('click',(el)=>{
                el.preventDefault()
                console.log(indexas);
                if(indexas>=-1){
                Todo.splice(indexas,1)
                row.remove()
                }
                localStorage.setItem('Todo', JSON.stringify(Todo))
            })
//------------------------------------------------
            if(TodoLength===1){main.append(table)}
        }else{alert('Select priority')}
    }else{alert(`input tasks name`)}
})
