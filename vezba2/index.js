const checkbox = document.getElementById("checkbox");
const radioVisa = document.getElementById("radioVisa");
const radioMaster = document.getElementById("radioMaster");
const radioPayPal = document.getElementById("radioPayPal");
const checkboxText = document.getElementById("checkboxText");
const radioText = document.getElementById("radioText");
const btnSubmit = document.getElementById("btnSubmit");

btnSubmit.addEventListener("click", () => {
  if (checkbox.checked) {
    checkboxText.innerHTML = "Its checked";
  } else {
    checkboxText.innerHTML = "Its not checked";
  }

  if (radioVisa.checked) {
    radioText.innerHTML = "Its checked Visa";
  } else if (radioMaster.checked) {
    radioText.innerHTML = "Its checked Master";
  } else if (radioPayPal.checked) {
    radioText.innerHTML = "Its checked PayPal";
  } else {
    radioText.innerHTML = "Its not checked";
  }
});
