"use strict"
const body = document.querySelector("body")
// body.style.display="flex"
// body.style.flexDirection="column"
// body.style.width="500px"
const button = document.createElement("button")
button.innerText="Get Country"
const input = document.createElement('input')
input.type = "text"
body.append(input,button)

const getCountry = async(event)=>{
    event.preventDefault()

    const inputValue = input.value.trim()

    const result = await fetch(`https://restcountries.com/v3.1/name/${inputValue}`)
    console.log(result);
    const data = await result.json()
    // console.log(data);

    if(result.status === 404){
        const infoElement = document.createElement('h2')
        infoElement.innerText = result.statusText
        body.append(infoElement)
    }else{
        const allCards = document.querySelectorAll(".card")
        allCards.forEach((card=>card.remove()))

        console.log(data);data.map((country)=>{
        const card = document.createElement('div');
        card.className="card"

        const flag = document.createElement('img')
        flag.src=country.flags.png
        flag.alt=country.flags.alt || country.name.common
        
        const title = document.createElement('h3');
        title.innerText=country.name.common
        card.append(flag,title)
        body.append(card)
    })}
}   
button.addEventListener("click", getCountry)

