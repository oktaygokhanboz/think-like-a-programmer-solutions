class Text {
  constructor(text) {
    if (typeof text != "string" || text.length === 0) {
      throw new Error("Please enter a string type text");
    }
    this.text = text;
  }

  // methods
  append(letter) {
    if (letter.length != 1) {
      throw new Error("Error! Input is not a letter!");
    }
    return (this.text += letter);
  }

  concatenate(newText) {
    return (this.text += newText);
  }

  characterAt(position) {
    if (typeof position != "number") {
      throw new Error("Error! Input is not a number");
    }
    const result = this.text.charAt(position);
    if (result.length === 0) {
      return -1;
    } else {
      return result;
    }
  }

  copy() {
    return new Text(this.text);
  }
}

const text = new Text("panda");
const text2 = text.copy();

console.log(text.append("r"));
console.log(text.concatenate("me"));
console.log(text.characterAt(5));

console.log(text2.characterAt(5));
