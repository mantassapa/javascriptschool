function editButton() {
    const body = document.querySelector("body")
    const buttonEdit = document.getElementById("buttonEdit")

    buttonEdit.addEventListener("click", (ev)=>{
        if(document.getElementById("DMButton")===null){
            const div = document.createElement("div")
            div.setAttribute("id", "DMButton")
            div.style.display="flex"
            div.style.justifyContent="center"
            div.style.marginBottom="50px"
            const buttonDire = document.createElement("button")
            const buttonMovie = document.createElement('button')
            buttonDire.innerText="Director"
            buttonMovie.innerText="Movie"
            body.append(div)
            div.append(buttonDire,buttonMovie) 
        
        
        
        }else{document.getElementById("DMButton").remove()}
    })
///test--------------------------------------------
    const div = document.createElement("div")
    div.setAttribute("id", "DMButton")
    div.style.display="flex"
    div.style.justifyContent="center"
    div.style.marginBottom="50px"
    const buttonDire = document.createElement("button")
    const buttonMovie = document.createElement('button')
    buttonDire.innerText="Director"
    buttonMovie.innerText="Movie"
    body.append(div)
    div.append(buttonDire,buttonMovie) 


    const divPUD = document.createElement("div")
    divPUD.setAttribute("id", "PUDButton")
    divPUD.style.display="flex"
    divPUD.style.justifyContent="center"
    divPUD.style.marginBottom="50px"
    const buttonPost = document.createElement("button")
    const buttonUpdate = document.createElement('button')
    const buttonDelete= document.createElement('button')
    buttonPost.innerText="Post"
    buttonUpdate.innerText="Update"
    buttonDelete.innerText="Delete"
    body.append(divPUD)
    divPUD.append(buttonPost,buttonUpdate,buttonDelete) 
    
//forma director------------submit
    const divFrom = document.createElement("div")
    divFrom.setAttribute("id", "FormaDiv")
    divFrom.style.display="flex"
    divFrom.style.flexDirection="column"
    divFrom.style.justifyContent="center"
    divFrom.style.alignItems="center"
    divFrom.style.marginBottom="50px"
    const form = document.createElement("form")
    form.style.display="flex"
    form.style.justifyContent="center"
    form.style.border="solid"
    form.style.borderColor="red"
    const inputName = document.createElement("input")
    const inputLName = document.createElement('input')
    const inputOscars= document.createElement('input')
    const buttonSubmit = document.createElement("button")
    inputName.setAttribute("placeholder", "input FirstName:")
    inputLName.setAttribute("placeholder", "input LastName:")
    inputOscars.setAttribute("placeholder", "input Oscars:")
    inputName.setAttribute("id", "inputFirstName")
    inputLName.setAttribute("id", "inputLastName")
    inputOscars.setAttribute("id", "inputOscars")
    buttonSubmit.innerText="Submit"
    buttonSubmit.style.width="150px"
    body.append(divFrom)
    divFrom.append(form,buttonSubmit)
    form.append(inputName,inputLName,inputOscars)




}



export{editButton}