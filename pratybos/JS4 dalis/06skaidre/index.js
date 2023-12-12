"use strict"
//1. uzduotis------------
let sk = 0;
let suma = 0;
let vidurkis = 0;
let skaicius = 0;
do {
  skaicius = parseInt(prompt(`Iveskite skaiciu`));
  if (skaicius >= 0) {
    sk++;
    suma += skaicius;
  } else {
    vidurkis = suma / sk;
    console.log(vidurkis);
    break;
  }
} while (skaicius >= 0);
console.log(sk, suma, vidurkis, skaicius)

//2. uzsduotis-----------
//     function getRandomToTen(min, max) {​​
//   return Math.floor(Math.random() * (max - min)) + min;
// }​​
// const randomNum = getRandomToTen(1, 10);
// console.log(randomNum);
// do {​​
//   const userInput = prompt("enter a num: ");
//   const num = parseFloat(userInput);
//   if (num === randomNum) {​​
//     alert("you guessed it right!");
//     displayImage();
//     break;
//   }​​ else if (num < randomNum) {​​
//     alert("too low. try again");
//   }​​ else {​​
//     alert("too high. try again");
//   }​​
// }​​ while (true); // vartotojas turi testi spejimus toil, kol atspes teisinga skaiciu
