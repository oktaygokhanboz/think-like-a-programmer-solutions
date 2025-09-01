// ISBN-13 Validator

let input = "978-1-59327-424-5"; // ISBN-13 of Think Like a Programmer
const ISBN = input.split("-").join("");
let isbnNumbers = ISBN.split("").map((e) => parseInt(e));

const lastIndex = isbnNumbers.length - 1;
let sum = 0;
for (let i = 0; i <= lastIndex; i++) {
  if (i === lastIndex) continue;
  let isOdd = (i + 1) % 2 === 1;

  if (isOdd) {
    sum += isbnNumbers[i];
  } else {
    sum += isbnNumbers[i] * 3;
  }
}

const lastDigit = isbnNumbers[lastIndex];
const checkDigit = 10 - (sum % 10);

if (checkDigit === lastDigit) {
  console.log(`${ISBN} is valid!`);
} else {
  console.log(`${ISBN} is not valid!`);
}
