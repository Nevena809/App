const btnDesc = document.getElementById("btnDesc");
const btnReset = document.getElementById("btnReset");
const btnInc = document.getElementById("btnInc");
const number = document.getElementById("number");
const text = document.getElementById("text");
const inputAge = document.getElementById("inputAge");
const btnSubmit = document.getElementById("btnSubmit");
const btnRandom = document.getElementById("btnRandom");

btnSubmit.addEventListener("click", () => {
  if (inputAge.value >= 18 && inputAge.value <= 100) {
    text.innerHTML = "You can enter";
    inputAge.value = "";
  } else if (inputAge.value < 18) {
    text.innerHTML = "You can't enter";
    inputAge.value = "";
  } else if (inputAge.value >= 100) {
    text.innerHTML = "You are too old";
    inputAge.value = "";
  }
});

let counter = 0;

btnDesc.addEventListener("click", () => {
  counter--;
  number.innerHTML = counter;
});

btnReset.addEventListener("click", () => {
  counter = 0;
  number.innerHTML = counter;
});

btnInc.addEventListener("click", () => {
  counter++;
  number.innerHTML = counter;
});

btnRandom.addEventListener("click", () => {
  counter = Math.floor(Math.random() * 6);
  number.innerHTML = counter;
});
