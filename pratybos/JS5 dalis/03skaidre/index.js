"use strict"

// pirma uzduotis

let rands = []
const atsitik = (count, min, max) => {
  while (rands.length < count){
    let r = Math.floor(Math.random()*(max - min + 1)) + min
    rands.push(r)
  }
  console.log(rands);
  return rands
}
atsitik(30, 5, 25)

// antra a

// const sk = rands.filter((el, index) => el > 10)
// console.log(sk);
// console.log(sk.length);

// const maxValue = Math.max(...rands)
// const index = []
// for(let i = 0; i<rands.length; i++){
//   if(rands[i]===maxValue){
//     index.push(i)
//   }
// }
// console.log(`didiziauses skaicius yra ${maxValue} jo indeksas yra ${index}`);

//antra b

// const maxValue = Math.max(...rands)
// const indexx = []
// const index = rands.forEach((el, index) => el === maxValue ? indexx.push(index):null);
// console.log(indexx);

//antra c

// const indexx = []
// const index = rands.reduce((accumulator, curentValue, curentIndex)=>
// curentIndex %2===0 ? accumulator + curentValue :accumulator, 0)

// console.log(index);

//antra d


// console.log(rands)
// const index = rands.map((el, index) => el - index)
// console.log(index);
//or
// const array = []
// const index = rands.forEach((el, index) => array.push(el - index))


// antra e

// let naujas = rands
// for (let i=1; i<10;i++){
//   let r = Math.floor(Math.random()*(10 - 1 + 1)) + 1
//   naujas.push(r)
//   }

// console.log(naujas);

//or

// for (let i=1; i<10;i++){
//   const naujas = Math.floor(Math.random()*(25 - 5)) + 5
//   rands.push(naujas)
// }
// console.log(rands)

// antra f

let evens = rands.filter((num,index) => index%2==0)
let odds = rands.filter((num,index) => index%2!=0)
console.log(evens)
console.log(odds)

// antra g

let didesnisUz = rands.map((num, index) => (index % 2 == 0 && num > 15) ? "nulis" :num)
console.log(didesnisUz);

//antra h

const didesnisUz10 = (num) => num > 10
console.log(rands.findIndex(didesnisUz10))