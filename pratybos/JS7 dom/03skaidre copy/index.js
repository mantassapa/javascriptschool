"use strict"

const body = document.querySelector("body")
const div = document.createElement("div")
div.setAttribute("class","main")
body.append(div)
const fotoMasyvas = ["https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg","https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg","https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://th.bing.com/th/id/OIG.gq_uOPPdJc81e_v0XAei","https://media.gcflearnfree.org/ctassets/topics/246/share_flower_fullsize.jpg","https://th.bing.com/th/id/OIG.b7fbyFnoRp_h0eDim7rl","https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg","https://cc-prod.scene7.com/is/image/CCProdAuthor/d-03-4?$pjpeg$&jpegSize=200&wid=720","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmUOvofdKUdxOfLjwXsJiJYHt-yU0XFifxQ&usqp=CAU","https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png"]

fotoMasyvas.forEach((el)=>{
    const div1 = document.createElement("div")
    div.append(div1)
    div1.setAttribute('class', "fotodiv")
    const img = document.createElement('img')
    img.setAttribute("src", el)
    const button = document.createElement('button')
    button.innerHTML="&#9829"
    div1.append(img,button)

})

div.style.display="flex"
div.style.flexWrap="wrap"

const alldivs = document.querySelectorAll(".fotodiv")
alldivs.forEach((el)=>{
    el.style.position="relative"
    el.style.width="250px"
    el.style.height="250px"
})
const allImg = document.querySelectorAll('img')
allImg.forEach((el)=>{
    el.style.width="250px"
    el.style.height="250px"
    el.style.position="absolute"
})
let counter = 0
let idCount = 0
const LSMas = localStorage.getItem("Likes")
const Likes = LSMas===null?[]:JSON.parse(LSMas)


const allbutton = document.querySelectorAll('button')
allbutton.forEach((el)=>{
    el.style.fontSize="xxx-large"
    el.style.backgroundColor="transparent"
    el.style.border="none"
    el.style.color="white"
    el.style.position="absolute"
    idCount++
    el.setAttribute('id', idCount)
    const idinfo = el.getAttribute('id')

    el.addEventListener("click", (ele)=>{
        ele.preventDefault()
        if (el.style.color==="white"){
            el.style.color="red"
            const ifid = Likes.includes(idinfo)
            if(ifid){
                const index = Likes.indexOf(idinfo)
                if(index>=0){Likes.splise(index, 1)}
                else{
                el.style.color="white"
                // counter-=1
                Likes.push(idinfo)}}
                
            // counter+=1
            // Likes.push(counter)
      

        }
        localStorage.setItem("Likes", JSON.stringify(Likes))

    })
})

// const random = (array) => {
//     const randomPic = Math.floor(Math.random() * array.length);
//     return array[randomPic];
//   };
   
//   for (let i = 0; i < picsMasyvas.length; i++) {
//     // containeris kiekvienam image'ui
//     const galleryItem = document.createElement("div");
//     galleryItem.style.position = "relative";
//     galerija.appendChild(galleryItem);
   
//     // images
//     const imgEl = document.createElement("img");
//     imgEl.setAttribute("src", picsMasyvas[i]);
//     imgEl.style.height = "250px";
//     imgEl.style.width = "250px";
//     galleryItem.appendChild(imgEl);
   
//     // mygtukas ir jo style
//     const buttonEl = document.createElement("button");
//     buttonEl.className = "btn";
//     buttonEl.id = "btn" + i;
//     buttonEl.innerHTML = '<i class="fa-solid fa-heart"></i>';
//     buttonEl.style.position = "absolute";
//     buttonEl.style.top = "0";
//     buttonEl.style.left = "0";
//     buttonEl.style.border = "none";
//     buttonEl.style.height = "25px";
   
//     galleryItem.appendChild(buttonEl);
   
//   }
//   const visiButtons = document.querySelectorAll(".btn");
//   // console.log(visiButtons);
//   visiButtons.forEach((e) => {
//     const rasti = e.getAttribute("id");
//     console.log(e);
//     e.addEventListener("click", () => {
//       // console.log(rasti);
//       // console.log("click");
   
//       if (e.style.color === "red") {
//         e.style.color = "black";
//         const arYra = favorites.includes(rasti);
//         if (arYra) {
//           const indexas = favorites.indexOf(rasti);
//           if (indexas >= 0) {
//             favorites.splice(indexas, 1);
           
//           }
//         }
//       } else {
//         e.style.color = "red";
//         favorites.push(rasti);
//         console.log(favorites);
       
//       }
//       localStorage.setItem("favorites", JSON.stringify(favorites));
//     });
//     if(favorites.includes(rasti)){
//         e.style.color = "red"
       
//       }
//   });
