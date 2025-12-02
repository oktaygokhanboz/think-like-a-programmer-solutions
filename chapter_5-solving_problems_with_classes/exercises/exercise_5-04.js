class MyString {
  constructor(text) {
    if (typeof text != "string" || text.length === 0) {
      throw new Error("Please enter a string type text");
    }
    this.text = text;

    // Proxy, replace of characterAt method
    return new Proxy(this, {
      get(target, prop) {
        if (Number.isInteger(+prop)) {
          const index = Number(prop);
          const char = target.text.charAt(index);
          return char.length === 0 ? -1 : char;
        }
        return Reflect.get(...arguments);
      },
    });
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

  copy() {
    return new MyString(this.text);
  }
}

// test
const s = new MyString("panda");
console.log(s[1]);
