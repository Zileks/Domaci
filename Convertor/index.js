"use strict";

function convertToCelsius(f) {
  return ((f - 32) * (5 / 9)).toFixed(2);
}

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.getElementById("input");
  let output = document.getElementById("output");
  let textArea = document.getElementById("ta");
  console.log(input.value);
  output.value = convertToCelsius(input.value);
  textArea.value = `(${input.value}°F - 32) * (5 / 9) = ${output.value}°C`;
});
