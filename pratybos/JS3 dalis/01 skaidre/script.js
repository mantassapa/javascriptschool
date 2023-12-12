// js3 pirma skaidre 1.uzduootis----------
function hello(){
    return 'hello world'
}
console.log(hello())

// 2. uzduotis------------------
function hallo(vardas){
    return `hello ${vardas}`
}
console.log(hallo('Jonas'))
console.log(hallo('Antanas'))

// 3. uzduotis -------------------
let year = 1
let names = 'Jonas'
function prabegoMetai(){
    return `${names} prabego ${year++} metai`
}
console.log(prabegoMetai())
console.log(prabegoMetai())
