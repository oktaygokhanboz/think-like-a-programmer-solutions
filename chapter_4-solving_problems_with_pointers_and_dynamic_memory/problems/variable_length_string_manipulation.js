// append, concatenate, characterAt functions

function append(text, char) {
  return text + char.at(0);
}

function concatenate(text_1, text_2) {
  return text_1 + text_2;
}

function characterAt(text, index) {
  return text.at(index);
}

console.log(append("Hello", "!"));
console.log(concatenate("Talk", "ing"));
console.log(characterAt("JavaScript", 4));
