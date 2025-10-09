// limitless array

const numbers = [23, 1001, 543, 321];

function pushAndSort(numberArray, e) {
  const newNumberArray = [...numberArray, e];
  return newNumberArray.toSorted((a, b) => a - b);
}

console.log(pushAndSort(numbers, 783));
