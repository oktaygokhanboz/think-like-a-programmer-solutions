const data = {
  value: 8,
  left: {
    value: 4,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: {
      value: 7,
      left: null,
      right: null,
    },
  },
  right: {
    value: 3,
    left: {
      value: 18,
      left: null,
      right: null,
    },
    right: {
      value: 18,
      left: null,
      right: null,
    },
  },
};

function binaryTreeAvarage(node) {
  if (node === null) {
    return { sum: 0, count: 0 };
  }
  const left = binaryTreeAvarage(node.left);
  const right = binaryTreeAvarage(node.right);
  return {
    sum: node.value + left.sum + right.sum,
    count: 1 + left.count + right.count,
  };
}

function binaryTreeMedian(node) {
  if (node === null) return { numbers: [], median: 0 };

  const left = binaryTreeMedian(node.left);
  const right = binaryTreeMedian(node.right);

  // sorted concatination of left, right and current node value numbers]
  const nums = left.numbers.concat(right.numbers);
  nums.push(node.value);
  nums.sort((a, b) => a - b);

  const median = nums[Math.floor(nums.length / 2)];
  return {
    numbers: nums,
    median: median,
  };
}

function binaryTreeMode(node, histogram = []) {
  if (node === null) return -1;

  if (histogram[node.value]) {
    histogram[node.value]++;
  } else {
    histogram[node.value] = 1;
  }

  const leftMode = binaryTreeMode(node.left, histogram);
  const rightMode = binaryTreeMode(node.right, histogram);

  let maxCount = 0;
  for (const num in histogram) {
    if (typeof histogram[num] === "number") {
      maxCount = histogram[num] > maxCount ? histogram[num] : maxCount;
    }
  }

  let mode = histogram.indexOf(maxCount);
  mode = leftMode.mode > mode ? leftMode.mode : mode;
  mode = rightMode.mode > mode ? rightMode.mode : mode;

  return mode;
}

const { sum, count } = binaryTreeAvarage(data);
const { numbers, median } = binaryTreeMedian(data);
const mode = binaryTreeMode(data);

console.log(`Avarage: ${sum / count}`);
console.log(`Median: ${median}`);
console.log(`Mode: ${mode}`);
