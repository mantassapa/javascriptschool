"use strict"

const body = document.querySelector("body")
const div = document.createElement("div")
div.setAttribute("class", "imageBlock")
body.insertAdjacentElement("afterbegin", div)
//img create and add
const img = document.createElement("img")
img.setAttribute('src',"https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg")
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
const imgarray =[img,img1,img2,img3,img4,img5,img6,img7,img8,img9]
//created divs
const div1 = document.createElement("div")
const div2 = document.createElement("div")
const div3 = document.createElement("div")
const div4 = document.createElement("div")
const div5 = document.createElement("div")
const div6 = document.createElement("div")
const div7 = document.createElement("div")
const div8 = document.createElement("div")
const div9 = document.createElement("div")
const div10 = document.createElement("div")
div.append(div1,div2,div3,div4,div5,div6,div7,div8,div9,div10)
//buttons
const button1 = document.createElement("button")
const button2 = document.createElement("button")
const button3 = document.createElement("button")
const button4 = document.createElement("button")
const button5 = document.createElement("button")
const button6 = document.createElement("button")
const button7 = document.createElement("button")
const button8 = document.createElement("button")
const button9 = document.createElement("button")
const button10 = document.createElement("button")
const buttonarray = [button1,button2,button3,button4,button5,button6,button7,button8,button9,button10]
//top divs style
const TopDivs = document.querySelectorAll('div>div')
TopDivs.forEach((el)=>{
    el.style.width="250px"
    el.style.height="250px"
    el.style.position="relative"
    el.append(imgarray.pop(0))
    el.append(buttonarray.pop(0))
})
//image style
const allImg = document.querySelectorAll("img")
allImg.forEach((el)=>{
    el.style.width="100%"
    el.style.height="100%"
    el.style.position="absolute"

})
//main div style
div.style.display="flex"
div.style.flexWrap="wrap"

const allbuttons = document.querySelectorAll("button")
allbuttons.forEach((el)=>{
    el.style.position="absolute"
    el.style.borderRadius="50px"
    el.innerHTML="&#9829"
    el.style.fontSize="xxx-large"
    el.style.marginLeft="200px"
    el.style.zIndex="1"
    el.style.display="flex"
    el.style.alignItems="flex-end"
    el.style.backgroundColor="transparent"
    el.style.color="white"
    el.style.borderStyle="none"

})
const LSArray = []
let counter = 0
allbuttons.forEach((el, ind) => el.addEventListener("click", ()=>{
    if (el.style.color ==="white"){
    el.style.color="red"
    counter+=1
    LSArray.push(counter)
    console.log(LSArray);
    localStorage.setItem("likes", JSON.stringify(LSArray))
    }else{
        el.style.color="white"
        counter-=1
        console.log(counter);
        LSArray.pop(-1)
        console.log(LSArray);
        localStorage.likes = JSON.stringify(JSON.parse(localStorage.likes ?? "[]").slice(0, -1))
    }
}))

console.log(counter);

