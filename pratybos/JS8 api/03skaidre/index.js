"use strict"
const API_KEY="s6WVIwHGefKrYPR5PNLgKEXiLk5KIIT0pddTLsD2bSc"
const body = document.querySelector("body")
// body.style.display="flex"
// body.style.flexDirection="column"
// body.style.width="500px"
const button = document.createElement("button")
button.innerText="Get Country"
const input = document.createElement('input')
input.type = "text"
const card = document.createElement('div')
card.style.display="flex"
card.style.flexWrap="wrap"
card.width="1000px"
body.append(input,button, card)

const getPhotos = async()=>{
    const result = await fetch(`https://api.unsplash.com/photos/random?client_id=${API_KEY}&count=10`)
    console.log(result);
    const data = await result.json()
    console.log(data);

    data.forEach(el=> {
        const img = document.createElement('img')
        img.src=el.urls.regular
        img.style.width="200px"
        img.className="image"
        card.append(img)
    });

}   
// getPhotos()

const getQueryPhotos = async(ev)=>{
    ev.preventDefault()

    const inputValue = input.value.trim()
    console.log(inputValue);
    const result = await fetch(`https://api.unsplash.com/search/photos?client_id=s6WVIwHGefKrYPR5PNLgKEXiLk5KIIT0pddTLsD2bSc&query=${inputValue}&per_page=1000`)
    console.log(result);

    let data = await result.json()
    console.log(data);

    if(data.results.total === 0){
        const infoElement = document.createElement('h2')
        infoElement.innerText = "data not found"
        body.append(infoElement)
    }else{
        const allImages = document.querySelectorAll(".image")
        allImages.forEach((img=>img.remove()))

        console.log(data)
        data.results.map((img, index)=>{
            const photo = document.createElement('img')
            photo.src=img.urls.regular
            photo.alt=img.alt_description
            photo.style.width="200px"
            photo.className="image"

            photo.addEventListener('click',(event)=>{
                if(photo.style.width<="200px"){
                    photo.style.width="500px"
                }else{photo.style.width="200px"}
            })
            
            card.appendChild(photo)

        

    })}
}   
button.addEventListener("click", getQueryPhotos)
// getQueryPhotos()

const allPhoto = document.querySelectorAll(".image")

// allPhoto.forEach((photo)=>{
//     photo.addEventListener(("click",el)=>{

//     })
// })
