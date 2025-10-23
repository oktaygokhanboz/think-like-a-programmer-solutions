const input = [1, 4, 99];

function intToList(numberList) {
  let stringNumber = "";

  for (const num of numberList) {
    // special case: check numbers are digit
    if (num < 0 || num > 9) {
      return "input contains non-digit element";
    }

    stringNumber += num.toString();
  }
  return parseInt(stringNumber);
}

console.log(intToList(input));
