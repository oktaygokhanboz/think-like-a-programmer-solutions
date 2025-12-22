const data = [1, 0, 0, 1, 1, 0, 1, 0, 1];

function hasOddParity(binaryArray) {
  let oddCount = 0;
  for (let i = 0; i < binaryArray.length; i++) {
    let currentBinary = binaryArray[i];
    if (currentBinary === 1) oddCount++;
  }
  return oddCount % 2 === 0 ? false : true;
}

function hasOddParityWithRecursion(binaryArray) {
  if (binaryArray.length === 0) return false;
  let currentBinary = binaryArray.pop();
  let hasOddParity = hasOddParityWithRecursion(binaryArray);
  if (currentBinary === 1) {
    return hasOddParity ? false : true;
  } else {
    return hasOddParity;
  }
}

console.log(hasOddParity(data));
console.log(hasOddParityWithRecursion(data));
