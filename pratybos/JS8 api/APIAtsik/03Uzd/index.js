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
button.style.height="50px"
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

// on load-------------------------------
const getPhotos = async()=>{
    const result = await fetch(`https://openaccess-api.clevelandart.org/api/artworks/?&limit=20&has_image=1`)
    const datas = await result.json()
    

    datas.data.forEach(el=> {
        const insideCard = document.createElement('div');
        insideCard.style.margin="20px"
        insideCard.style.textAlign="center"
        insideCard.style.width="300px"
        insideCard.className="insideCard"
        insideCard.style.border="5px solid"
        insideCard.style.borderColor="violet"

        const poster = document.createElement('img')
        poster.src=el.images.web.url
        poster.style.width="200px"
        poster.alt=el.title
        console.log(el.creators);
        
        const title = document.createElement('h2');
        title.innerText=el.title
        title.style.color="white"
        const author = document.createElement('h2');
        el.creators.map((ele)=>{author.innerText=ele.description})
        author.style.color="white"
        const year = document.createElement('h3');
        year.innerText=el.creation_date
        year.style.color="white"
        card.append(insideCard)
        insideCard.append(title, author, year, poster)
    });
}

getPhotos()
//search ---------------------------------------------------------
const getPhoto= async(event)=>{
    event.preventDefault()
    const inputValue = input.value.trim()

    const result = await fetch(`https://openaccess-api.clevelandart.org/api/artworks/?&q=${inputValue}&has_image=1`)
    const data2 = await result.json()

    if(data2.info.total <= 0){
        const infoAll = document.querySelectorAll('.errorName')
        infoAll.forEach((el)=>{el.remove()})
        const infoElement = document.createElement('h2')
        infoElement.innerText = 'Nerasta'
        infoElement.className="errorName"
        infoElement.style.color="white"
        card.append(infoElement)
    }else{
        const allInsCards = document.querySelectorAll(".insideCard")
        allInsCards.forEach((card=>card.remove()))
        const infoAll = document.querySelectorAll('.errorName')
        infoAll.forEach((el)=>{el.remove()})


        data2.data.map((el)=>{
            const insideCard = document.createElement('div');
            insideCard.style.margin="20px"
            insideCard.style.textAlign="center"
            insideCard.style.width="300px"
            insideCard.className="insideCard"
            insideCard.style.border="5px solid"
            insideCard.style.borderColor="violet"

            const poster = document.createElement('img')
            poster.src=el.images.web.url
            poster.style.width="200px"
            poster.alt=el.title
            console.log(el.creators);
            
            const title = document.createElement('h2');
            title.innerText=el.title
            title.style.color="white"
            const author = document.createElement('h2');
            el.creators.map((ele)=>{author.innerText=ele.description})
            author.style.color="white"
            const year = document.createElement('h3');
            year.innerText=el.creation_date
            year.style.color="white"
            card.append(insideCard)
            insideCard.append(title, author, year, poster)
    })
    }
}   

button.addEventListener('click', getPhoto)
