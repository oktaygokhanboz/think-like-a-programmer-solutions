class MyString {
  constructor(text) {
    if (typeof text != "string" || text.length === 0) {
      throw new Error("Please enter a string type text");
    }
    this.text = text;

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
      throw new Error("Error! Parameter must be a letter!");
    }
    this.text += letter;
  }

  concatenate(newText) {
    this.text += newText;
  }

  copiedString() {
    return new MyString(this.text);
  }

  remove(start, deleteCount) {
    if (start < 0 || start > this.text.length - 1) {
      throw new Error("Start index is invalid!");
    }
    if (deleteCount < 0) {
      throw new Error("Delete number must be a positive value!");
    }

    let text = this.text;
    let newText = "";
    let currentCount = 0;
    for (let i in text) {
      if (i >= start && currentCount < deleteCount) {
        currentCount++;
        continue;
      }
      newText += text[i];
    }
    this.text = newText;
  }
}

// test
const s = new MyString("panda");
s.remove(2, 2);
console.log(s.text);
