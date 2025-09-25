// Find the most frequent number in the given array

const givenArray = [4, 2, 7, 2, 9, 4, 4, 2, 4, 7];

function findMode(numbers) {
  let histogram = {};
  let mode = numbers[0];
  let maxCount = 0;

  for (const num of numbers) {
    histogram[num] = (histogram[num] || 0) + 1;
    if (histogram[num] > maxCount) {
      maxCount = histogram[num];
      mode = num;
    }
  }

  return mode;
}

console.log("Mode: " + findMode(givenArray));
