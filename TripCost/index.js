function calculateExpenses(distance, consumption, fuelPrice) {
  return (distance / 100) * consumption * fuelPrice;
}

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const distance = document.getElementById("input1");
  const consumption = document.getElementById("input2");
  const fuelPrice = document.getElementById("input3");
  console.log(distance);
  const output = document.getElementById("output");
  output.value = calculateExpenses(
    distance.value,
    consumption.value,
    fuelPrice.value
  ).toFixed(2);
});
