import readlineSync from "readline-sync";

const fromBase = parseInt(
  readlineSync.question("Base Converter (2-16)\nFrom base: ")
);
const toBase = parseInt(readlineSync.question("To base: "));
const numberStr = readlineSync.question(`Number in base-${fromBase}: `);

function isNumberValid() {
  if (!(fromBase >= 2 && fromBase <= 16) || !(toBase >= 2 && toBase <= 16)) {
    throw Error("Bases must be between 2 - 16!");
  }

  const digitArray = numberStr.split("");
  for (const d of digitArray) {
    if (!(parseInt(d, fromBase) >= 0 && parseInt(d, fromBase) < fromBase)) {
      throw Error(`The number in base-${fromBase} is invalid!`);
    }
  }
}

function numberSystemConverter() {
  isNumberValid();
  return parseInt(numberStr, fromBase).toString(toBase);
}

try {
  const result = numberSystemConverter();
  console.log(`Result in base-${toBase}: ${result}`);
} catch (e) {
  console.log(e.message);
}
