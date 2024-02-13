"use strict"
import { login } from "./login.js"
import { addForm } from "./adsForm.js"
import { header } from "./header.js"

function mainPage(){
    //header----------------------
    header()
    const body = document.querySelector("body")
    //body---------------------------
    const allAds = document.createElement("main")
    allAds.setAttribute("id", "allAds")
    allAds.style.backgroundColor="rgba(103, 0, 0)"
    allAds.style.width="100%"
    allAds.style.height="auto"
    allAds.style.minHeight="97%"
    allAds.style.display="flex"
    allAds.style.justifyContent="center"
    allAds.style.alignItems="center"
    allAds.style.flexWrap="wrap"
    allAds.style.gap="20px"
    body.append(allAds)
    getAllAds()
}
const getAllAds=async()=>{
    await fetch('http://localhost:5000/api/ads',{
        method:"GET"
    })
    .then((response)=>{
        if(!response.ok){
            throw new Error(`server responded with ${response.status}`)
        }
        return response.json();
    })
    .then((body)=>{
        //divas skirtas skelbimui--------------------
        // console.log(body);
        body.forEach((el)=>{
            // console.log(el);
            const adDiv = document.createElement('div')
            adDiv.setAttribute("id", el._id)
            adDiv.style.width="300px"
            adDiv.style.height="200px"
            adDiv.style.display="flex"
            adDiv.style.position="relative"
            adDiv.style.backgroundColor="black"
            adDiv.style.color="orange"
            adDiv.style.borderRadius="20px"
            allAds.append(adDiv)
            const divL = document.createElement("div")
            divL.style.width="40%"
            divL.style.height="100%"
            const img = document.createElement("img")
            img.setAttribute("src", el.url)
            img.setAttribute("alt", el.text)
            img.style.width="100%"
            img.style.height="100%"
            const divR = document.createElement("div")
            divR.style.width="60%"
            divR.style.height="100%"
            divR.style.padding="10px"
            const h2 = document.createElement("h2")
            h2.innerText=el.text
            const h3 = document.createElement("h3")
            h3.innerText=el.description
            h3.style.overflow="hidden"
            h3.style.height="40px"
            const h5 = document.createElement("h5")
            h5.innerText=`${el.price}€`
            h5.style.position="absolute"
            h5.style.bottom="10px"
            const zoomBtn = document.createElement("button")
            zoomBtn.style.position="absolute"
            zoomBtn.style.width="100%"
            zoomBtn.style.height="100%"
            zoomBtn.style.border="none"
            zoomBtn.style.backgroundColor="rgba(0,0,0,0)"
            zoomBtn.addEventListener("click", (ev)=>{
                if(adDiv.style.width==="300px"){
                    //this is test-----------
                    const underdiv = document.createElement("div")
                    const body = document.querySelector("body")
                    underdiv.setAttribute("id","underDiv")
                    underdiv.style.width="100%"
                    underdiv.style.height="100%"
                    underdiv.style.backgroundColor="rgba(0,0,0,0.5)"
                    underdiv.style.position="absolute"
                    underdiv.style.zIndex="2"
                    underdiv.style.top="0px"
                    underdiv.style.right="0px"
                    underdiv.style.left="0px"
                    underdiv.style.bottom="0px"
                    underdiv.style.display="flex"
                    underdiv.style.justifyContent="center"
                    underdiv.style.alignItems="center"
                    //still test--------------
                    adDiv.style.width="600px"
                    adDiv.style.height="400px"
                    h3.style.height="auto"
                    body.append(underdiv)
                    underdiv.append(adDiv)
                    if(el.user===localStorage.getItem("Id")||localStorage.getItem("Name")==="admin"){
                        const deleteBtn = document.createElement("button")
                        deleteBtn.setAttribute("id", "deleteBtn")
                        deleteBtn.style.position="absolute"
                        deleteBtn.style.backgroundColor="red"
                        deleteBtn.style.right="0px"
                        deleteBtn.innerText="Delete"
                        const updateBtn = document.createElement("button")
                        updateBtn.setAttribute("id", "updateBtn")
                        updateBtn.style.position="absolute"
                        updateBtn.style.backgroundColor="orange"
                        updateBtn.style.right="50px"
                        updateBtn.innerText="Update"
                        adDiv.append(deleteBtn,updateBtn)

                        deleteBtn.addEventListener("click", (ev)=>{
                            const deleteAd=async()=>{
                                await fetch(`http://localhost:5000/api/ads/${el._id}`,{
                                    method:"DELETE"
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
                                    console.log(err);
                                })
                            }
                            document.getElementById(`${el._id}`).remove()
                            deleteAd()
                        })
                        //update ----------------------------
                        updateBtn.addEventListener("click",(ev)=>{
                            const updateForm = document.createElement('form')
                            updateForm.setAttribute("id","updateForm")
                            updateForm.style.position="absolute"
                            updateForm.style.width='100%'
                            updateForm.style.height='100%'
                            updateForm.style.backgroundColor="rgba(0,0,0,0.5)"

                            adDiv.append(updateForm)
                            const cancelBtn = document.createElement("button")
                            cancelBtn.innerText="Cancel" 
                            cancelBtn.style.position="absolute" 
                            cancelBtn.style.right="0px"
                            cancelBtn.style.top="20px"
                            cancelBtn.style.backgroundColor="red"
                            cancelBtn.addEventListener("click",(ev)=>{document.querySelector("#updateForm").remove()})
                            
                            const inputUrl = document.createElement("input")
                            inputUrl.setAttribute("type","text")
                            inputUrl.setAttribute("id","urlLog")
                            inputUrl.style.position="absolute"
                            inputUrl.style.left="0px"
                            inputUrl.style.top="200px"
                            inputUrl.setAttribute("placeholder","url:")
                            inputUrl.defaultValue=el.url
                            const inputName = document.createElement("input")
                            inputName.setAttribute("type","text")
                            inputName.setAttribute("id","nameLog")
                            inputName.setAttribute("placeholder","Name:")
                            inputName.style.position="absolute"
                            inputName.style.left="170px"
                            inputName.style.top="30px"
                            inputName.defaultValue=el.text
                            const inputDes = document.createElement("textarea")
                            inputDes.setAttribute("type","text")
                            inputDes.setAttribute("id","desLog")
                            inputDes.setAttribute("placeholder","Description:")
                            inputDes.style.position="absolute"
                            inputDes.style.left="170px"
                            inputDes.style.top="60px"
                            inputDes.style.width="280px"
                            inputDes.style.height="250px"
                            inputDes.defaultValue=el.description
                            const inputPrice = document.createElement("input")
                            inputPrice.setAttribute("type","number")
                            inputPrice.setAttribute("id","priceLog")
                            inputPrice.setAttribute("placeholder","Price:")
                            inputPrice.style.position="absolute"
                            inputPrice.style.left="170px"
                            inputPrice.style.bottom="30px"
                            inputPrice.defaultValue=el.price
                            const submitBtn = document.createElement("button")
                            submitBtn.innerText="Publish"
                            submitBtn.style.borderRadius="10px"
                            submitBtn.style.backgroundColor="rgba(177, 27, 233, 0.2)"
                            submitBtn.style.color="orange"
                            submitBtn.style.borderColor="green"
                            submitBtn.style.position="absolute"
                            submitBtn.style.right="0px"
                            submitBtn.style.bottom="30px"

                            updateForm.append(cancelBtn,inputUrl,inputName,inputDes,inputPrice,submitBtn)

                            submitBtn.addEventListener("click", (ev)=>{
                                    const updateAd=async()=>{
                                        await fetch(`http://localhost:5000/api/ads/${el._id}`,{
                                            method:"PUT",
                                            headers:{'Content-Type': 'application/json'},
                                            body:`{
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
                            
                                        })
                                        .catch((err)=>{
                                            console.log(err);
                                        })
                                    }
                                    updateAd()
                                })
                            })
                        //update ----------------------------
                    }
                }else{
                    allAds.append(adDiv)
                    document.querySelector("#underDiv").remove()
                    if(document.querySelector("#deleteBtn")){document.querySelector("#deleteBtn").remove()}
                    if(document.querySelector("#updateBtn")){document.querySelector("#updateBtn").remove()}
                    adDiv.style.width="300px"
                    adDiv.style.height="200px"
                    h3.style.height="40px"
                }
            })
            adDiv.append(divL,divR,zoomBtn)
            divL.append(img)
            divR.append(h2,h3,h5)

        })

    })
}
    





export {mainPage, getAllAds}