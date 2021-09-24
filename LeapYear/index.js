"use strict";

let year = 2016;
let month = 2;
let monthName;
let monthNum;

const checkLeapYear = function (year) {
  return year % 4 === 0
    ? year % 100 === 0
      ? year % 400 === 0
        ? true
        : false
      : true
    : false;
};

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.getElementById("input");
  let output = document.getElementById("output");
  if (input.value < 1582) {
    alert("Year must be greater than 1581");
  } else
    checkLeapYear(input.value)
      ? (output.value = "a Leap Year!")
      : (output.value = "is not a Leap Year!");
});
