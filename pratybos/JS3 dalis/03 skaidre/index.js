//1. uzduotis-----------------

function ivestaSuma(){
    sk1 = parseInt(prompt('iveskite pirma skaiciu'))
    sk2 = parseInt(prompt('iveskite antra skaiciu'))
    suma = sk1+sk2
    alert(`skaiciu suma yra ${suma}`)
}
// ivestaSuma()

//2. uzduotis-----------------

function ivestaKvadrata(){
    sk1 = parseInt(prompt('iveskite skaiciu'))
    suma = sk1*sk1
    alert(`skaiciaus kvadratas yra ${suma}`)
}
// ivestaKvadrata()

//3. uzduotis-----------------

let ivestaTeig = () => {
    sk1 = parseInt(prompt('iveskite skaiciu'))
    if (sk1>0){
        alert('skaicius yra Teigiams')}
    else if (sk1==0){
        alert('skaicius yra nulis')}
    else{
        alert('skaicius Neigiamas')}
}
// ivestaTeig()

//4. uzduotis-----------------

function ivestaSakini(zod1,zod2,zod3){
    zod1 = prompt('iveskite pirma zodi')
    zod2 = prompt('iveskite antra zodi')
    zod3 = prompt('iveskite antra zodi')
    alert(`${zod1} ${zod2} ${zod3}`)
}
// ivestaSakini()

//5. uzduotis-----------------


let ivestaLyg = () => {
    sk1 = parseInt(prompt('iveskite skaiciu'))
    suma = sk1 % 2 == 0
    if (suma){
        alert('skaicius yra lyginis')}
    else{
        alert('skaicius nelyginis')}
}
// ivestaLyg()

//6. uzduotis-----------------

let ivestaTink = () => {
    sk1 = parseInt(prompt('iveskite skaiciu'))
    sk2 = parseInt(prompt('iveskite skaiciu'))
    suma = sk1 % sk2 == 0
    if (suma){
        alert('Dalijasi be liekanos')}
    else{
        alert('nesveikas skaicius')}
}
// ivestaTink()

//7. uduotis-----------------


let ivestadidz = (sk1,sk2,sk3) =>{
    let did = Math.max(sk1,sk2,sk3)
    alert(`${did} yra didziausias skaicius`)
}
// ivestadidz(6,98,34)

