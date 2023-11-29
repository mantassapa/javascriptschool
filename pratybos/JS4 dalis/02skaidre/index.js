"use strict"
//1. uzduotis------------
const leFamily = {
    me: 33,
    father: 55,
    mother: 53,
    sister: 32,
    brother1: 28,
    brother2: 25,
    aunt: 61,
    uncle: 60,
    cousin1: 37,
    cousin2: 37,
    grandfather1: 79,
    grandmother1: 77,
    grandfather2: 81,
    grandmother2: 80,
    cat: 3,
    dog: 7,
    parrot: 2,
  };
  for (let i in leFamily){
      if(leFamily[i]>=65){
          console.log(i)
      }
  }

let lyg = 0
let nelyg = 0
for (let i in leFamily){
    if(leFamily[i]%2==0){
      lyg++}
    else{
      nelyg++
    }}
     
console.log(lyg)
console.log(nelyg)
    


  //pratybos, pavyzdziai
// let person = {
//     name: 'sam',
//     age: 33,
//     job: 'officer'
// }
// for (let key in person){
//     console.log(key,":",person[key])
// }
  
// let person = {
//     name: 'sam',
//     age: 33,
//     job: 'officer',
//     hobies: {
//         1: "swimming",
//         2: "reading",
//         3: 'skating'
//     }       
// }
// for (let i in person.hobies){
//     let hoby = person.hobies[i]
//     console.log(`my hoby is ${hoby}`)
// }

// for (let i in person){
//     if (i === "hobies"){
//         for (let hoby in person[i]){
//             console.log(`my hoby is: ${person[i][hoby]}`)
//         }
//     }
// }