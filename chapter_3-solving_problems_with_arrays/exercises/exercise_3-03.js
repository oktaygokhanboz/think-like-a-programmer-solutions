// Determine whether the data in the array is sorted

const numberArray = [5, 23, 12, 98, 72, 81, 63, 49, 55, 17, 34];

function isSorted(numericArray) {
  let isSorted = true;
  const sortedArray = numberArray.toSorted((a, b) => a - b);

  numberArray.forEach((num, i) => {
    if (num !== sortedArray[i]) isSorted = false;
  });

  return isSorted;
}

console.log(isSorted(numberArray));
