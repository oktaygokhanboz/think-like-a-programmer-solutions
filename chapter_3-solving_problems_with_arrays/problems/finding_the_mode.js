const surveyResults = [4, 7, 3, 8, 9, 7, 3, 9, 9, 3, 3, 10];

function findMode(array) {
  const histogram = Array(10).fill(0);

  // store count of the same values
  for (let i = 0; i < surveyResults.length; i++) {
    histogram[surveyResults[i] - 1]++;
  }

  // find highest value of histogram, in other words, mode of survey
  let mode = histogram[0];
  let modeIndex = 0;
  for (let i = 1; i < histogram.length; i++) {
    if (histogram[i] > mode) {
      mode = histogram[i];
      modeIndex = i;
    }
  }

  return ++modeIndex;
}

console.log("The mode is " + findMode(surveyResults));
