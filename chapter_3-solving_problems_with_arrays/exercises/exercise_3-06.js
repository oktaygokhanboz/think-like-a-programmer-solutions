// Convert a message to cipher text randomly

// Max text length should be 26!
const originalText = "I love coding.";

const getRandomChar = () => {
  const randomCharCode = "a".codePointAt() + Math.floor(Math.random() * 26);
  return String.fromCodePoint(randomCharCode);
};

function convertToCipher(text) {
  let cipherText = "";
  let randomChar;
  let i = 0;
  // Make each letter unique in cipher
  while (i < text.length) {
    randomChar = getRandomChar();
    if (!cipherText.includes(randomChar)) {
      cipherText += randomChar;
      i++;
    }
  }
  return cipherText;
}

console.log(convertToCipher(originalText));
