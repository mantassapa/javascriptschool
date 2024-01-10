"use strict"
const body = document.querySelector("body")
body.style.display="flex"
body.style.flexDirection="column"
body.style.width="500px"
const button = document.createElement("button")
button.style.color="white"
button.style.backgroundColor="grey"
button.innerText="ExPress"
const img = document.createElement('img')
body.append(button, img)

const getPhoto = async()=>{
    const result = await fetch("https://coffee.alexflipnote.dev/random.json")
    console.log(result);
    const data = await result.json()
    console.log(data);

    img.src=data.file
}
button.addEventListener("click",getPhoto)
