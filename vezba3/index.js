const min = 1;
const max = 100;

const number = Math.floor(Math.random() * (max - min + 1) + min);

let guess;
let attempts = 0;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between ${min} - ${max}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("That is not a number");
  } else if (guess < min || guess > max) {
    window.alert("That is not corect rangde of numbers");
  } else {
    attempts++;
    if (guess < number) {
      window.alert(`To low, try again.`);
    } else if (guess > number) {
      window.alert(`To high, try again.`);
    } else {
      window.alert(`Correct. Number is ${guess}. It took ${attempts}`);

      running = false;
    }
  }
}
