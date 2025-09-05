import readlineSync from "readline-sync";

let input = readlineSync.question("Enter text: ");

// Clear a word from punctuation
function clearPuncuation(text) {
  let items = text.split("");
  const result = items.filter(
    (i) =>
      i === "-" || i === "'" || (i >= "a" && i <= "z") || (i >= "A" && i <= "Z")
  );
  return result.join("");
}

function getNumberOfWords(text) {
  const words = text.split(" ");
  return words.length;
}

function getNumberOfCharacters(text) {
  const characters = text.length;
  return characters;
}

function getLongestWordAndLength(text) {
  const words = text.split(" ");

  let lengthOfTheLongestWord = 0;
  let longestWord = "";
  for (let w of words) {
    w = clearPuncuation(w);
    if (w.length > lengthOfTheLongestWord) {
      lengthOfTheLongestWord = w.length;
      longestWord = w;
    }
  }
  return { longestWord, lengthOfTheLongestWord };
}

function getGreatestVowelAndLength(text) {
  const vowels = ["a", "e", "i", "o", "u"];
  const words = text.split(" ");

  let greatestVowelWord = "";
  let greatestNumberOfVowels = 0;
  let vowelCounter = 0;
  for (let w of words) {
    w = clearPuncuation(w);
    for (const letter of w) {
      if (vowels.some((v) => v === letter)) vowelCounter++;
    }
    if (vowelCounter > greatestNumberOfVowels) {
      greatestVowelWord = w;
      greatestNumberOfVowels = vowelCounter;
    }
    vowelCounter = 0;
  }
  return { greatestVowelWord, greatestNumberOfVowels };
}

console.log("Number of words: " + getNumberOfWords(input));
console.log("Number of characters: " + getNumberOfCharacters(input));
console.log(
  "Number of longest word and its length: ",
  getLongestWordAndLength(input)
);
console.log(
  "Greatest vowel word and number of vowels in it: ",
  getGreatestVowelAndLength(input)
);
