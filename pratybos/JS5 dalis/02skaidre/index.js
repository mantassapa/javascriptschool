"use strict"

// antra uzduotis
const array = ['one', 'two', 'three', 'four', 'one', 'one']

const arrayTwo = []
for (let i of array){
  if (arrayTwo.indexOf(i)==-1){
    arrayTwo.push(i)
  }
}
console.log(arrayTwo);

//ketvirta uzduotis


const skaiciai = [7,2,4,5,7,9,8,7,6,8]
const sk = skaiciai.map((el) => el%2==0 ? 'juozas' : el)
console.log(sk);
const didziosios = sk.map((el) => typeof(el)==='string'? el.toUpperCase(): el)
console.log(didziosios);