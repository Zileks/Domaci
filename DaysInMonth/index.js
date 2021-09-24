"use strict";

const checkLeapYear = function (year) {
  return year % 4 === 0
    ? year % 100 === 0
      ? year % 400 === 0
        ? true
        : false
      : true
    : false;
};

function monthCalc(year, month) {
  let monthNum;
  switch (month) {
    case 1:
      monthNum = 31;
      break;
    case 2:
      // monthNum = isLeapYear ? 29 : 28;
      monthNum = checkLeapYear(year) ? 29 : 28;
      break;
    case 3:
      monthNum = 31;
      break;
    case 4:
      monthNum = 30;
      break;
    case 5:
      monthNum = 31;
      break;
    case 6:
      monthNum = 30;
      break;
    case 7:
      monthNum = 31;
      break;
    case 8:
      monthNum = 31;
      break;
    case 9:
      monthNum = 30;
      break;
    case 10:
      monthNum = 31;
      break;
    case 11:
      monthNum = 30;
      break;
    case 12:
      monthNum = 31;
      break;
  }
  return monthNum;
}

input.addEventListener("change", (e) => {
  e.preventDefault();
  let input = document.getElementById("input");
  let output = document.getElementById("output");
  let inputString = input.value;
  console.log(inputString);
  let date = inputString.split("-");
  let year = parseInt(date[0]);
  let month = parseInt(date[1].slice(1));
  console.log(year);
  console.log(month);
  output.value = monthCalc(year, month);
});

// document.getElementById("form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   let inputString = input.value;
//   console.log(inputString);
//   let date = inputString.split("-");
//   let year = parseInt(date[0]);
//   let month = parseInt(date[1].slice(1));
//   console.log(year);
//   console.log(month);
//   output.value = monthCalc(year, month);
// });
