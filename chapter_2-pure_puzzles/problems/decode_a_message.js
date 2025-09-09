const stringToInt = (stringNumber) => {
  if (isNaN(stringNumber)) {
    throw new Error("Message can't include letter!");
  }
  return parseInt(stringNumber);
};

const codeToUpperCase = (code) => {
  let number = code % 27;
  if (number === 0) {
    decodingMode.switch();
    return "";
  } else {
    number += 64;
    return String.fromCharCode(number);
  }
};

const codeToLowerCase = (code) => {
  let number = code % 27;
  if (number === 0) {
    decodingMode.switch();
    return "";
  } else {
    number += 96;
    return String.fromCharCode(number);
  }
};

const codeToPunctuation = (code) => {
  const number = code % 9;
  switch (number) {
    case 1:
      return "!";
    case 2:
      return "?";
    case 3:
      return ",";
    case 4:
      return ".";
    case 5:
      return " ";
    case 6:
      return ";";
    case 7:
      return '"';
    case 8:
      return "'";
    default:
      decodingMode.switch();
      return "";
  }
};

const decodingMode = {
  /* 
    MODE SIGN:
    Upper case = U, 
    Lower case = L, 
    Punctuation = P 
    */
  mode: "U",
  get() {
    return this.mode;
  },
  switch() {
    switch (this.mode) {
      case "U":
        this.mode = "L";
        break;
      case "L":
        this.mode = "P";
        break;
      case "P":
        this.mode = "U";
    }
  },
};

function decode(input) {
  const splitter = ",";
  const charCodes = input.split(splitter);
  let code;
  let message = "";

  charCodes.map((stringCode) => {
    try {
      code = stringToInt(stringCode);
    } catch (err) {
      throw err;
    }

    switch (decodingMode.get()) {
      case "U":
        message += codeToUpperCase(code);
        break;
      case "L":
        message += codeToLowerCase(code);
        break;
      case "P":
        message += codeToPunctuation(code);
    }
  });

  return message;
}

// only test purpose
const input = "18,12312,171,763,98423,1208,216,11,500,18,241,0,32,20620,27,10";
console.log(decode(input));
