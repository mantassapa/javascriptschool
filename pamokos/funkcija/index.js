import {dat} from "./script.js";
console.log(dat)

//sum1 = x skaitosi default reiksme jeigu iskvieciant neiraso
function countSum(sum1 = 2,sum2 = 2){
    let sum = sum1 + sum2
    return sum
}
console.log(countSum(5,5))


function hello(word,vardas){
    word = 'hello'
    vardas = 'name'
}
console.log(hello())