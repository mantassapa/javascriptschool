"use strict"
//1. uzduotis------------
const numbers = [2,34,54,67,77,1,99]
let suma = 0
for(let number of numbers){
    suma+=number
}
console.log(suma)

const words = ['geras', 'dienynas', 'skanios', 'kavytes']

for (let i of words){
  let kiek = 0
  for (let a of i){
    kiek++
  }
  console.log(`${i}=${kiek}...${i.length}`)
}