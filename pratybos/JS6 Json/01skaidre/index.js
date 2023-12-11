"use strict";
import result from "./data.js";
console.log(result);
const infoIsLS = localStorage.getItem("favorites")

const favorites = infoIsLS === null ? [] : JSON.parse(infoIsLS); // jeigu neraa sukuria nauja masyva

const filmoInfo = (id)=>{
    const filmas = result.find((el) => el.id === id)
    console.log(filmas);
    return filmas
  
}

// filmoInfo(19995)


const myMovies = (id) =>{
    const myLikes = {
        id: filmoInfo(id).id,
        title: filmoInfo(id).title
    }
    console.log(myLikes);
    const ieskomas = favorites.find((el) => el.id === myLikes.id)
    if(ieskomas){
        alert("toks jau yra")
    }else{
        favorites.push(myLikes)
        localStorage.setItem("favorites", JSON.stringify(favorites))
        alert("Movie inserted")
    }
}

// myMovies(19995)

const LogMovies = (id) => {
    const fromLS = JSON.parse(localStorage.getItem("favorites"))
    fromLS.forEach((el) => console.log(`id: ${el.id} title: ${el.title}`))
}
LogMovies(19995)

const delMovies =(id)=>{
    const fromLS = JSON.parse(localStorage.getItem("favorites"))

    const movieIndex = fromLS.findIndex((movie) => movie.id === id)
    console.log(movieIndex)

    if (movieIndex > -1){
        alert(`istrintas filmas ${fromLS[movieIndex].title}`)
        fromLS.localStorage(movieIndex, 1) 
        localStorage.setItem("favorites", JSON.stringify(fromLS))
    }
    else{
        alert(`movie not found`)
    }
}

// delMovies(19995)
