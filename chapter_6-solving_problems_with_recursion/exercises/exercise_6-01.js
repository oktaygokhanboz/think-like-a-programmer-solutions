const data = [8, -14, 0, 5, -2, 12, 9, -8, 0, 3];

function sumOfPositiveNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) continue;
    sum += numbers[i];
  }
  return sum;
}

function recursiveSumOfPositiveNumbers(numbers) {
  if (numbers.length === 0) return 0;
  let currentNumber = numbers.pop();
  const sum = recursiveSumOfPositiveNumbers(numbers);
  return currentNumber > 0 ? currentNumber + sum : sum;
}

console.log(sumOfPositiveNumbers(data));
console.log(recursiveSumOfPositiveNumbers(data));
