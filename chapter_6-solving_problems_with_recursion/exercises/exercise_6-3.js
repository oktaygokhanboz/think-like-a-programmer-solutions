const data = [-1, 0, 3, 9, 8, 22, 9, -2, 17, 3, 9, 4];

function targetNumberCount(numbers, targetNumber) {
  let count = 0;
  for (const num of numbers) {
    if (num === Number(targetNumber)) count++;
  }
  return count;
}

function targetNumberCountWithRecursion(numbers, targetNumber) {
  if (numbers.length === 0) return 0;
  const currentNum = numbers.shift();
  let resultCount = targetNumberCountWithRecursion(numbers, targetNumber);
  return currentNum === Number(targetNumber) ? ++resultCount : resultCount;
}

console.log(targetNumberCount(data, 9));
console.log(targetNumberCountWithRecursion(data, 9));
