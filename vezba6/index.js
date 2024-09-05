function generatePassword(
  length,
  includeLowecase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+=-/<.,>~";

  let allowChars = "";
  let password = "";

  allowChars += includeLowecase ? lowercaseChars : "";
  allowChars += includeUppercase ? uppercaseChars : "";
  allowChars += includeNumbers ? numbers : "";
  allowChars += includeSymbols ? symbols : "";

  if (length <= 0) {
    return `Password lenght must be al least 1`;
  } else if (allowChars.length === 0) {
    return `Password chars must be included`;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowChars.length);
    password += allowChars[randomIndex];
  }
  return password;
}

const passwordLenght = 12;
const includeLowecase = true;
const includeUppercase = false;
const includeNumbers = true;
const includeSymbols = false;

//call function
const password = generatePassword(
  passwordLenght,
  includeLowecase,
  includeUppercase,
  includeNumbers,
  includeSymbols
);

console.log(`Password ${password}`);
