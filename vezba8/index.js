const clock = document.getElementById("clock");

function updateClock() {
  const curentTime = new Date();
  const hours = curentTime.getHours().toString().padStart(2, 0);
  const minutes = curentTime.getMinutes().toString().padStart(2, 0);
  const seconds = curentTime.getSeconds().toString().padStart(2, 0);
  const timeString = `${hours}:${minutes}:${seconds}`;

  clock.innerHTML = timeString;
}

updateClock();
setInterval(updateClock, 1000);
