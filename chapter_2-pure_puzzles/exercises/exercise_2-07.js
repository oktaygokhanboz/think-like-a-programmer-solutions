import readlineSync from "readline-sync";

// Input Check Functions

const checkBinary = (binary) => {
  for (let b of binary) {
    if (isNaN(parseInt(b)) || !(b == 0 || b == 1))
      throw Error("Error: Binary only accept 1 and 0 as input");
  }
};

const checkDecimal = (decimal) => {
  for (let d of decimal) {
    if (isNaN(d)) throw Error("Error: Decimal only accept numeric values");
  }
};

const checkHexadecimal = (hexadecimal) => {
  for (let d of hexadecimal) {
    if (
      !(
        (parseInt(d) >= 0 && parseInt(d) <= 9) ||
        (parseInt(d, 16) >= parseInt("a", 16) &&
          parseInt(d, 16) <= parseInt("f", 16))
      )
    ) {
      throw Error("Error: Wrong hexadecimal input");
    }
  }
};

// Conversion Functions

const binaryToDecimal = (binary) => {
  checkBinary(binary);
  const decimal = parseInt(binary, 2);
  return decimal;
};

const binaryToHexadecimal = (binary) => {
  const hexadecimal = binaryToDecimal(binary).toString(16);
  return hexadecimal;
};

const decimalToBinary = (decimal) => {
  checkDecimal(decimal);
  const binary = parseInt(decimal).toString(2);
  return binary;
};

const decimalToHexadecimal = (decimal) => {
  checkDecimal(decimal);
  const hexadecimal = parseInt(decimal).toString(16);
  return hexadecimal;
};

const hexadecimalToBinary = (hexadecimal) => {
  checkHexadecimal(hexadecimal);
  const decimal = parseInt(hexadecimal, 16);
  const binary = decimal.toString(2);
  return binary;
};

const hexadecimalToDecimal = (hexadecimal) => {
  checkHexadecimal(hexadecimal);
  const decimal = parseInt(hexadecimal, 16);
  return decimal;
};

// Main function which converts numeric systems by user selection

function numericSystemConverter() {
  const types = ["Binary", "Decimal", "Hexadecimal"];
  const fromTypeIndex = readlineSync.keyInSelect(
    types,
    "Select a numeric system you want to convert"
  );
  if (fromTypeIndex === -1) return;

  const toTypes = types.filter((t) => types.indexOf(t) !== fromTypeIndex);
  const toTypeIndex = readlineSync.keyInSelect(toTypes, "Convert to");
  if (toTypeIndex === -1) return;

  switch (types[fromTypeIndex]) {
    case "Binary": {
      const binary = readlineSync.question("Enter Binary: ");
      switch (toTypes[toTypeIndex]) {
        case "Decimal":
          return binaryToDecimal(binary);
        case "Hexadecimal":
          return binaryToHexadecimal(binary);
      }
    }
    case "Decimal": {
      const decimal = readlineSync.question("Enter Decimal: ");
      switch (toTypes[toTypeIndex]) {
        case "Binary":
          return decimalToBinary(decimal);
        case "Hexadecimal":
          return decimalToHexadecimal(decimal);
      }
    }
    case "Hexadecimal": {
      const hexadecimal = readlineSync.question("Enter Hexadecimal: ");
      switch (toTypes[toTypeIndex]) {
        case "Binary":
          return hexadecimalToBinary(hexadecimal);
        case "Decimal":
          return hexadecimalToDecimal(hexadecimal);
      }
    }
  }
}

// Lets try

try {
  console.log(numericSystemConverter() || "Canceled");
} catch (e) {
  console.error(e.message);
}
