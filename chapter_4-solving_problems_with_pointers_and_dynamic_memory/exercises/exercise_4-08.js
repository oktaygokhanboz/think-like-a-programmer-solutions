const string = "Welcome to the paradise!";

function removeChars(s, position, num) {
  if (position <= 0 || num < 0) {
    return "Wrong position or delete number";
  }

  let result = "";
  position -= 1;
  num -= 1;

  for (let i = 0; i < s.length; i++) {
    if (i < position || i > position + num) {
      result += s.at(i);
    }
  }
  return result;
}

console.log(removeChars(string, 1, 1));
