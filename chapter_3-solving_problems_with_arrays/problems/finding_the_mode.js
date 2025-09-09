const surveyResults = [4, 7, 3, 8, 9, 7, 3, 9, 9, 3, 3, 10];

function findMode(array) {
  let modelIndex;
  let modelCount = 0;
  let count;

  array.forEach((e, i) => {
    count = 0;
    for (const element of array) {
      if (e === element) count++;
    }
    if (count > modelCount) {
      modelCount = count;
      modelIndex = i;
    }
  });

  return array[modelIndex];
}

console.log("The mode is " + findMode(surveyResults));
