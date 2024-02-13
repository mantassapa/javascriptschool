"use strict"

import { getAllAds } from "./main.js"


function addForm(){
    const body = document.querySelector("body")
    const divform = document.createElement("div")
    divform.setAttribute("id", "divFromAd")
    divform.style.backgroundColor="rgba(177, 27, 233, 0.2)"
    divform.style.position="absolute"
    divform.style.width="100%"
    divform.style.height="100%"
    divform.style.top="0px"
    divform.style.left="0px"
    divform.style.display="flex"
    divform.style.justifyContent="center"
    divform.style.alignItems="center"
    divform.style.zIndex="10"
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
    h1.innerText="add new Ad"
    const exitBtn = document.createElement("button")
    exitBtn.innerText="X"
    exitBtn.style.marginLeft="240px"
    exitBtn.style.borderRadius="10px"
    exitBtn.style.backgroundColor="rgba(177, 27, 233, 0)"
    exitBtn.style.color="red"
    exitBtn.style.borderColor="white"
    exitBtn.style.width="25px"
    exitBtn.style.fontSize="20px"
    exitBtn.style.padding="0px"
    const form = document.createElement("form")
    form.setAttribute("id", "loginForm")
    form.style.display="flex"
    form.style.flexDirection="column"
    form.style.alignItems="center"
    form.style.gap="10px"
    formFrame.append(exitBtn,h1,form)

    exitBtn.addEventListener("click", (ev)=>{
        document.querySelector("#divFromAd").remove()
    })

    const labelUrl = document.createElement("label")
    labelUrl.innerText="Url:"
    const inputUrl = document.createElement("input")
    inputUrl.setAttribute("type","text")
    inputUrl.setAttribute("id","urlLog")
    const labelName = document.createElement("label")
    labelName.innerText="Name:"
    const inputName = document.createElement("input")
    inputName.setAttribute("type","text")
    inputName.setAttribute("id","nameLog")
    const labelDes = document.createElement("label")
    labelDes.innerText="Description:"
    const inputDes = document.createElement("textarea")
    inputDes.setAttribute("type","text")
    inputDes.setAttribute("id","desLog")
    const labelPrice = document.createElement("label")
    labelPrice.innerText="Price:"
    const inputPrice = document.createElement("input")
    inputPrice.setAttribute("type","number")
    inputPrice.setAttribute("id","priceLog")
    const submitBtn = document.createElement("button")
    submitBtn.innerText="Publish"
    submitBtn.style.borderRadius="10px"
    submitBtn.style.backgroundColor="rgba(177, 27, 233, 0.2)"
    submitBtn.style.color="orange"
    submitBtn.style.borderColor="green"

    form.append(labelName,inputName,labelDes,inputDes,labelPrice,inputPrice,labelUrl,inputUrl,submitBtn)

    submitBtn.addEventListener("click", (ev)=>{
        ev.preventDefault()
        const postAds = async()=>{
            await fetch('http://localhost:5000/api/ads',{
            method:"POST",
            headers:{'Content-Type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem("Token")}`
            },
            body:`{
                "user":"${localStorage.getItem("Id")}",
                "text":"${inputName.value}",
                "description":"${inputDes.value}",
                "price":"${inputPrice.value}",
                "url": "${inputUrl.value}"
            }`
            })
            .then((response)=>{
                if(!response.ok){
                    throw new Error(`server responded with ${response.status}`)
                }
                return response.json();
            })
            .then((body)=>{
                console.log(body);
                const added = document.createElement("h1")
                added.innerText="Ad added!!"
                form.append(added)
                alert("add published")
                
                setTimeout(() => {
                    document.querySelector("#divFromAd").remove()
                    document.querySelectorAll("allAds>*").forEach((el)=>{el.remove()})
                    getAllAds()
                }, 1000);

            })
            .catch((err)=>{
                console.error("Error", err.message)
                if(err.message==="server responded with 400"){
                    if(document.querySelector("#errorMsg")!=null){document.querySelector("#errorMsg").remove()}
                    const form =  document.querySelector("#loginForm")
                    const errorMsg = document.createElement("h2")
                    errorMsg.setAttribute("id","errorMsg")
                    errorMsg.innerText="Please fill all fields!"
                    errorMsg.style.position="absolute"
                    errorMsg.style.marginTop="-170px"
                    form.append(errorMsg)
                }
            })
    }
    postAds()
})



}
//65cb420f6cf7cda7cd0abe2d admin id

export {addForm}