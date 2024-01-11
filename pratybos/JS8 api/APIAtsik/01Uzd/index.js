"use strict"
const body =  document.querySelector('body')
body.style.backgroundColor="black"
body.style.display="flex"
body.style.flexDirection="column"
body.style.alignItems="center"
const button = document.createElement('button')
button.innerText="Presso"
button.style.width="500px"
button.style.height="100px"
button.style.color="violet"
button.style.backgroundColor="black"
button.style.borderColor="violet"
const card = document.createElement('div')
card.className="card"
body.append(button,card)

const getPhoto = async()=>{
    const allImg = document.querySelectorAll('img')
    allImg.forEach((el)=>{el.remove()})
    const result = await fetch(`https://dog.ceo/api/breeds/image/random`)
    const data = await result.json()
    const img = document.createElement('img')
    img.src=data.message
    img.style.width="500px"
    card.append(img)
}
getPhoto()
button.addEventListener('click', getPhoto)