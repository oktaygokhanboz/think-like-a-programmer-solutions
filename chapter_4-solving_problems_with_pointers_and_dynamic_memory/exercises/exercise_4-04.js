const text = "abcdabee";

// location 0 shows length of the string
function lengthIndicated(string) {
  const textCopy = string + "0";
  let count = 0;
  while (textCopy.at(count)) {
    count++;
  }
  const letgth = count - 1;
  return letgth + string;
}

// logs letter of the string
function output(string) {
  for (let i = 0; i < lengthIndicated(string)[0]; i++) {
    console.log(string.at(i));
  }
}

output(text);
