// Convert a message to cipher text

const originalText = "I love coding.";
const cipherKey = 3;

function convertToCipher(text) {
  let charCode;
  let convertedText = "";
  for (const char of text) {
    charCode = char.charCodeAt(0);
    convertedText += String.fromCodePoint(charCode + cipherKey);
  }
  return convertedText;
}

console.log("Cipher text: " + convertToCipher(originalText));
