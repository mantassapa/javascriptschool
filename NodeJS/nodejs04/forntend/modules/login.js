'use strict'

function login(){
    const body = document.querySelector("body")
    const divform = document.createElement("div")
    divform.style.backgroundColor="rgba(177, 27, 233, 0.2)"
    divform.style.position="absolute"
    divform.style.width="100%"
    divform.style.height="100%"
    divform.style.top="0px"
    divform.style.left="0px"
    divform.style.display="flex"
    divform.style.justifyContent="center"
    divform.style.alignItems="center"
    body.append(divform)
    const formFrame = document.createElement("div")
    formFrame.setAttribute("id", "formFrame")
    formFrame.style.backgroundColor="rgba(199, 0, 195)"
    formFrame.style.color="orange"
    formFrame.style.width="250px"
    formFrame.style.height="400px"
    formFrame.style.display="flex"
    formFrame.style.flexDirection="column"
    formFrame.style.alignItems="center"
    formFrame.style.borderRadius="50px"
    divform.append(formFrame)
    const h1 = document.createElement("h1")
    h1.innerText="よこそ!"
    const h2 = document.createElement("h2")
    h2.style.marginTop="0px"
    h2.innerText="Log in"
    const regBtn = document.createElement("button")
    regBtn.innerText="Register"
    regBtn.style.marginTop="-10px"
    regBtn.style.borderRadius="10px"
    regBtn.style.backgroundColor="rgba(177, 27, 233, 0.2)"
    regBtn.style.color="orange"
    regBtn.style.borderColor="black"
    const h3 = document.createElement("h3")
    h3.innerText="Or"
    const form = document.createElement("form")
    form.setAttribute("id", "loginForm")
    form.style.display="flex"
    form.style.flexDirection="column"
    form.style.alignItems="center"
    form.style.gap="10px"
    formFrame.append(h1,h2,form,h3,regBtn)

    const labelEmail = document.createElement("label")
    labelEmail.innerText="Email:"
    const inputEmail = document.createElement("input")
    inputEmail.setAttribute("type","email")
    inputEmail.setAttribute("id","emailLog")
    const labelPass = document.createElement("label")
    labelPass.innerText="Password:"
    const inputPass = document.createElement("input")
    inputPass.setAttribute("type","password")
    inputPass.setAttribute("id","passwordLog")
    const submitBtn = document.createElement("button")
    submitBtn.innerText="Let's go"
    submitBtn.style.borderRadius="10px"
    submitBtn.style.backgroundColor="rgba(177, 27, 233, 0.2)"
    submitBtn.style.color="orange"
    submitBtn.style.borderColor="white"

    form.append(labelEmail,inputEmail,labelPass,inputPass,submitBtn)

    loginBtn()







    regBtn.addEventListener("click", (ev)=>{
        ev.preventDefault()

        if(regBtn.innerText==="Register"){
            document.querySelector("#formFrame>h2").innerText="Register"
            const form =  document.querySelector("#loginForm")
            const formInside =  document.querySelectorAll("#loginForm>*")
            document.querySelector("#formFrame").style.height="450px"
            regBtn.innerText="Log in"

            formInside.forEach((el)=>{el.remove()})

            const labelName = document.createElement("label")
            labelName.innerText="Name:"
            const inputName = document.createElement("input")
            inputName.setAttribute("type","email")
            const labelEmail = document.createElement("label")
            labelEmail.innerText="Email:"
            const inputEmail = document.createElement("input")
            inputEmail.setAttribute("type","email")
            const labelPass = document.createElement("label")
            labelPass.innerText="Password:"
            const inputPass = document.createElement("input")
            inputPass.setAttribute("type","password")
            const submitBtn = document.createElement("button")
            submitBtn.innerText="Let's go"
            submitBtn.style.borderRadius="10px"
            submitBtn.style.backgroundColor="rgba(177, 27, 233, 0.2)"
            submitBtn.style.color="orange"
            submitBtn.style.borderColor="white"

            form.append(labelName,inputName,labelEmail,inputEmail,labelPass,inputPass,submitBtn)
        }else if(regBtn.innerText==="Log in"){
            document.querySelector("#formFrame>h2").innerText="Log in"
            const form =  document.querySelector("#loginForm")
            const formInside =  document.querySelectorAll("#loginForm>*")
            document.querySelector("#formFrame").style.height="400px"
            regBtn.innerText="Register"

            formInside.forEach((el)=>{el.remove()})


            const labelEmail = document.createElement("label")
            labelEmail.innerText="Email:"
            const inputEmail = document.createElement("input")
            inputEmail.setAttribute("type","email")
            inputEmail.setAttribute("id","emailLog")
            const labelPass = document.createElement("label")
            labelPass.innerText="Password:"
            const inputPass = document.createElement("input")
            inputPass.setAttribute("type","password")
            inputPass.setAttribute("id","passwordLog")
            const submitBtn = document.createElement("button")
            submitBtn.innerText="Let's go"
            submitBtn.style.borderRadius="10px"
            submitBtn.style.backgroundColor="rgba(177, 27, 233, 0.2)"
            submitBtn.style.color="orange"
            submitBtn.style.borderColor="white"
        
            
            form.append(labelEmail,inputEmail,labelPass,inputPass,submitBtn)

            loginBtn()
        }
        
    })

}

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzM0ZjBkMWI2YzU1YjBmNmE2MDI3NiIsImlhdCI6MTcwNzI5ODU3MywiZXhwIjoxNzA5ODkwNTczfQ.nm2E6hojh8sKngpYnfJ6h3Ovc-wNJQW4V9V9148sH98"
//login db siuntimas-------------------------------------------------
function loginBtn() {
    const inputEmail = document.querySelector("#loginForm>#emailLog")
    const inputpass = document.querySelector("#loginForm>#passwordLog")
    const submitBtn = document.querySelector("#loginForm>button")
    submitBtn.addEventListener("click", (ev)=>{
        ev.preventDefault()
        const  postuser = async() => {
            const result = await fetch("http://localhost:5000/api/users/login",{
                method:"POST",
                headers:{
                    "Content-Type": "aplication/json",
                    // authorization: `Bearer ${token}`
                },
                body: JSON.stringify({email: inputEmail.value, password: inputpass.value})
            })
            .then((response)=>{
                if(!response.ok){
                    throw new Error(`server responded with ${response.status}`)
                }
                return response.json();
            })
            .then((body)=>{
                console.log(body);
            })
            .catch((err)=>{
                console.error("Error", err.message)
            })
            return result.json()
        }
        postuser()
    })
}

//register db siuntimas-----------------------------------


export {login}