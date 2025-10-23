const input = [1, 4, 9];

function intToList(numberList) {
  let stringNumber = "";

  for (const num of numberList) {
    stringNumber += num.toString();
  }
  return parseInt(stringNumber);
}

console.log(intToList(input));
