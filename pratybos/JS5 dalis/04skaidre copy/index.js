"use strict"

const pazymiai = [10,9,8,6,7,4,3,4,9,10]

function average(array) {
  return array.reduce((curentIndex, curentValue) => (curentIndex + curentValue)) / array.length;
}

console.log(average(pazymiai));

