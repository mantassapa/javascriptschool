"use strict"
const MyKey = "2ce83546"
const body =  document.querySelector('body')
body.style.backgroundColor="black"
const main = document.createElement('main')
main.style.display="flex"
main.style.flexDirection="column"
main.style.alignItems="center"

const button = document.createElement('button')
button.innerText="Presso"
button.style.width="200px"
button.style.color="violet"
button.style.backgroundColor="black"
button.style.borderColor="violet"
const input = document.createElement('input')
input.style.width="300px"
input.setAttribute('placeHolder', 'type what kind of movie you want')

const card = document.createElement('div');
card.style.display="flex"
card.style.flexWrap="wrap"
card.style.justifyContent="center"
card.style.textAlign="center"
card.className="card"
body.append(main,card)
main.append(input,button)

const getMovie= async(event)=>{
    const inputValue = input.value.trim()

    const result = await fetch(`http://www.omdbapi.com/?apikey=${MyKey}&s=${inputValue}`)
    const data = await result.json()

    if(data.Response === "False"){
        const allInsCards = document.querySelectorAll(".insideCard")
        allInsCards.forEach((card=>card.remove()))
        const infoAll = document.querySelectorAll('.errorName')
        infoAll.forEach((el)=>{el.remove()})
        const infoElement = document.createElement('h2')
        infoElement.innerText = data.Error
        infoElement.className="errorName"
        infoElement.style.color="white"
        card.append(infoElement)
    }else{
        const allInsCards = document.querySelectorAll(".insideCard")
        allInsCards.forEach((card=>card.remove()))
        const infoAll = document.querySelectorAll('.errorName')
        infoAll.forEach((el)=>{el.remove()})

        data.Search.map((el)=>{

        const insideCard = document.createElement('div');
        insideCard.style.margin="20px"
        insideCard.style.textAlign="center"
        insideCard.style.width="300px"
        insideCard.className="insideCard"

        const poster = document.createElement('img')
        poster.src=el.Poster
        poster.alt=el.Title
        
        const title = document.createElement('h2');
        title.innerText=el.Title
        title.style.color="white"
        const year = document.createElement('h3');
        year.innerText=el.Year
        year.style.color="white"
        card.append(insideCard)
        insideCard.append(title,year,poster)
    })}
}

button.addEventListener('click', getMovie)