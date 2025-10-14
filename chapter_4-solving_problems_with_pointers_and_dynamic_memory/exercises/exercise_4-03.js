// Replace substring with arbitrary string

const text = "abcdabee";

function replaceString(source, target, replaceText) {
  if (!target || !replaceText) {
    return "Empty target or replaceText";
  }

  return source.split(target).join(replaceText);
}

const result = replaceString(text, "ab", "xyz");
console.log(result);
