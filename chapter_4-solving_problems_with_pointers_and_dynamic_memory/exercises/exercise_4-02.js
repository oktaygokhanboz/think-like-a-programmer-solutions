// subscript of a string array

const text = "abcdefg";

function substring(arrayString, startPosition, length) {
  let output = "";
  let count = 0;
  for (let i = 0; i < arrayString.length; i++) {
    if (i + 1 >= startPosition && count < length) {
      output += arrayString[i];
      count++;
    }
  }
  return output;
}

console.log(substring(text, 3, 4));
