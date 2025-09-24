// Decode a cipher text to original message

const cipherText = "L#oryh#frglqj1";

function cipherToOriginal(text, cipherKey) {
  let charCode;
  let originalText = "";
  for (const char of text) {
    charCode = char.charCodeAt(0);
    originalText += String.fromCodePoint(charCode - cipherKey);
  }
  return originalText;
}

const originalText = cipherToOriginal(cipherText, 3);
console.log(originalText);
