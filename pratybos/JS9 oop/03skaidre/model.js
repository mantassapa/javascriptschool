"use strict"
export class Reader{
    constructor(name, surname, card_nr, token_book){
        this.name = name
        this.surname=surname
        this.card_nr=card_nr
        this.token_book=token_book
    }
    getReaderInfo(){}
}

function forma() {
    const body = document.querySelector("body")
    body.style.display="flex"
    body.style.flexDirection="column"
    body.style.alignItems="center"
    const form = document.createElement("form")
    form.style.display="flex"
    form.style.flexDirection="column"
    form.style.gap="10px"
    body.append(form)
    const inputName = document.createElement('input')
    inputName.setAttribute('placeholder', "iveskite varda")
    inputName.setAttribute('id', "inputName")
    inputName.setAttribute("required","required")
    inputName.setAttribute("type", "text")
    const inputSur = document.createElement('input')
    inputSur.setAttribute('placeholder', "iveskite pavarde")
    inputSur.setAttribute('id', "inputSur")
    inputSur.setAttribute("required","required")
    inputSur.setAttribute("type","text")
    const inputNr = document.createElement("input")
    inputNr.setAttribute('placeholder', "iveskite korteles numeri")
    inputNr.setAttribute('id', "inputNr")
    inputNr.setAttribute("required","required")
    inputNr.setAttribute("type","number")
    const inputBook = document.createElement("input")
    inputBook.setAttribute('placeholder', "iveskite knygos pavadinima")
    inputBook.setAttribute('id', "inputBook")
    inputBook.setAttribute("required","required")
    inputBook.setAttribute("type", "text")
    const submit = document.createElement("button")
    submit.setAttribute('id', "submit")
    submit.innerText="submit"
    form.append(inputName,inputSur,inputNr,inputBook,submit)
}
export{forma}