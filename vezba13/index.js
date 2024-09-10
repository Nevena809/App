const box = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

box.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "tomato";
  event.target.innerHTML = "OUCH! 🤕";
});

box.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "orange";
  event.target.innerHTML = "Don't do it 🥺";
});

box.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "lightgreen";
  event.target.innerHTML = "Click me 😀";
});

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  if (event.key.startsWith("Arrow")) {
    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }
    box.style.top = `${y}px`;
    box.style.left = `${x}px`;
  }
});
