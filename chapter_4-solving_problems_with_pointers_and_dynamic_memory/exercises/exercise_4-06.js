const text = "apple";

function append(stringText, letter) {
  stringText += letter;
  return stringText;
}

function characterAt(stringText, position) {
  return stringText.at(position);
}

console.log(append(text, "!"));
console.log(characterAt(text, 4));
