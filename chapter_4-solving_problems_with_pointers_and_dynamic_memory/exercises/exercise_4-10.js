const input_1 = [1, 4, 9];
const input_2 = [5, 1];

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

function sumOfIntLists(intList_1, intList_2) {
  const num1 = intToList(intList_1);
  const num2 = intToList(intList_2);
  return num1 + num2;
}

console.log(sumOfIntLists(input_1, input_2));
