"use strict"
import { addForm } from "./adsForm.js"
import { login } from "./login.js"

function header(){
        //header----------------------
    const body = document.querySelector("body")
    const header = document.createElement("header")
    header.style.width="100%"
    header.style.height="40px"
    header.style.backgroundColor="rgba(103, 0, 0, 0.6)"
    header.style.position="sticky"
    header.style.top="0px"
    header.style.zIndex="2"
    header.style.display="flex"
    header.style.flexDirection="row-reverse"
    header.style.alignItems="center"
    header.style.gap="10px"
    body.append(header)
    const logOut = document.createElement("button")
    logOut.innerText="Log Out"
    logOut.style.height="70%"
    logOut.style.borderRadius="15px"
    logOut.style.backgroundColor="rgba(103, 0, 0)"
    logOut.style.color="violet"
    logOut.addEventListener("click", (ev)=>{
        ev.preventDefault()
        localStorage.removeItem("Token")
        localStorage.removeItem("Name")
        localStorage.removeItem("Id")
        document.querySelector("#whosthere").innerText=" "
        login()
    })
    const userName = document.createElement("h3")
    userName.innerText = localStorage.getItem("Name")
    userName.setAttribute("id","whosthere")
    userName.style.color="orange"
    const addAd = document.createElement("button")
    addAd.innerText="add new Ad"
    addAd.style.color="orange"
    addAd.style.backgroundColor="rgb(0,100,0)"
    addAd.style.borderRadius="15px"
    addAd.style.borderColor="rgb(0,160,0)"
    header.append(logOut,userName,addAd)

    addAd.addEventListener('click', (ev)=>{
        ev.preventDefault()
        addForm()
    })

}
export {header}