"use strict"

const body = document.querySelector("body")
const div = document.createElement("div")
body.insertAdjacentElement("afterbegin", div)
const img = document.createElement("img")
img.setAttribute('src',"https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg")

div.append(img)

const img1 = document.createElement("img")
img1.setAttribute('src',"https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg")
const img2 = document.createElement("img")
img2.setAttribute('src',"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
const img3 = document.createElement("img")
img3.setAttribute('src',"https://th.bing.com/th/id/OIG.gq_uOPPdJc81e_v0XAei")
const img4 = document.createElement("img")
img4.setAttribute('src',"https://media.gcflearnfree.org/ctassets/topics/246/share_flower_fullsize.jpg")
const img5 = document.createElement("img")
img5.setAttribute('src',"https://th.bing.com/th/id/OIG.b7fbyFnoRp_h0eDim7rl")
const img6 = document.createElement("img")
img6.setAttribute('src',"https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg")
const img7 = document.createElement("img")
img7.setAttribute('src',"https://cc-prod.scene7.com/is/image/CCProdAuthor/d-03-4?$pjpeg$&jpegSize=200&wid=720")
const img8 = document.createElement("img")
img8.setAttribute('src',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmUOvofdKUdxOfLjwXsJiJYHt-yU0XFifxQ&usqp=CAU")
const img9 = document.createElement("img")
img9.setAttribute('src',"https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png")
div.append(img1,img2,img3,img4,img5,img6,img7,img8,img9)

const allImg = document.querySelectorAll('img')
allImg.forEach((el)=>{
    el.style.width="250px"
    el.style.height="250px"
})
allImg.forEach(addEventListener("click", (el)=>{
    el.preventDefault()
    el.style.width="px"
}))