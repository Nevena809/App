const inputNumber = document.getElementById("inputNumber");
const radioFarenhite = document.getElementById("radioFarenhite");
const radioCelsius = document.getElementById("radioCelsius");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");

let temp;
function convert() {
  if (radioFarenhite.checked) {
    temp = inputNumber.value;
    temp = temp * (9 / 5) + 32;
    result.innerHTML = `${temp} F`;
  } else if (radioCelsius.checked) {
    temp = inputNumber.value;
    temp = (temp - 32) * (5 / 9);
    result.innerHTML = `${temp} C`;
  } else {
    result.innerHTML = "Select an unit";
  }
}
