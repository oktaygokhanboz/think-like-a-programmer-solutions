// Binary - Decimal Converter

function binaryToDecimal(binary) {
  if (typeof binary !== "string") {
    throw Error("Input must be string");
  }

  const binaryDigits = binary.split("").reverse();
  let decimal = 0;
  binaryDigits.forEach((d, i) => {
    if (!(d === "0" || d === "1")) {
      throw Error("Wrong input! Binary only accept 0 and 1");
    }

    decimal += parseInt(d) * Math.pow(2, i);
  });

  return decimal;
}

function decimalToBinary(decimal) {
  if (typeof decimal !== "string") {
    throw Error("Input must be string");
  }

  const decimalDigits = decimal.split("");
  decimalDigits.forEach((d) => {
    if (isNaN(parseInt(d))) {
      throw Error("Wrong input! Decimals only accept number type");
    }
  });

  const findBinaryLength = (num) => {
    let i = 0;
    while (Math.pow(2, i) <= parseInt(num)) i++;
    return i;
  };

  let binary = "";
  let number = parseInt(decimal);
  const binaryLastIndex = findBinaryLength(decimal) - 1;
  for (let i = binaryLastIndex; i >= 0; i--) {
    if (number >= Math.pow(2, i)) {
      binary += "1";
      number -= Math.pow(2, i);
    } else {
      binary += "0";
    }
  }

  return binary;
}

try {
  console.log(binaryToDecimal("1001"));
  console.log(decimalToBinary("9"));
} catch (e) {
  console.error(e.message);
}
