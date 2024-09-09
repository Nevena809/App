try {
  const dividend = Number(window.prompt("Enter a devidend"));
  const divisior = Number(window.prompt("Enter a divisior"));

  if (divisior === 0) {
    throw new Error("Divisior can not be zero");
  }
  if (isNaN(dividend) || isNaN(divisior)) {
    throw new Error("You must enter a number");
  }

  const result = dividend / divisior;
  console.log(result);
} catch (error) {
  console.error(error);
}

console.log("End of the program");
