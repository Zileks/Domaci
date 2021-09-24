"use strict";

let num = 52;
function isPrime(number) {
  let isPrime = true;
  if (number > 1) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
      return isPrime;
    }
  }
}

function listPrimes(num1, num2) {
  let arr = [];
  for (num1; num1 < num2; num1++) {
    if (isPrime(num1)) arr.push(num1);
  }
  return arr;
}

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let input1 = document.getElementById("input1");
  let input2 = document.getElementById("input2");
  let output = document.getElementById("output");
  output.value = listPrimes(input1.value, input2.value);
});
