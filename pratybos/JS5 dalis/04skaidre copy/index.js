"use strict"

const pazymiai = [10,9,8,6,7,4,3,4,9,10]

function average(nums) {
  return nums.reduce((a, b) => (a + b)) / nums.length;
}

console.log(average(pazymiai));

