"use strict"
//1. uzduotis------------
let suma=0
let skaicius = 0
let vid = 0
let sk = 0
do {
  skaicius = parseInt(prompt('iveskite skaiciu'))
  if (skaicius>0){
  sk++
  suma+=skaicius
  }
  else{
  break
  }
  vid = suma/sk
}while(skaicius>0);
console.log(vid)
