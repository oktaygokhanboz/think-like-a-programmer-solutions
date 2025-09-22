const salesOfAgents = [
  [1856, 498, 30924, 87478, 328, 2653, 387, 3754, 387587, 2873, 276, 32],
  [5865, 5456, 3983, 6464, 9957, 4785, 3875, 3838, 4959, 1122, 7766, 2534],
  [23, 55, 67, 99, 265, 376, 232, 223, 4546, 564, 4544, 3434],
];

function findHighestMedianSaleAgent(salesOfAgents) {
  let highestMedian = 0;
  let currentMedian = 0;
  let higestMedianAgentIndex;
  const isEven = (num) => num % 2 === 0;

  salesOfAgents.forEach((sales, i) => {
    const sortedSales = sales.toSorted((a, b) => a - b);
    let medianIndex = Math.ceil(sales.length / 2);

    if (isEven(sales.length)) {
      currentMedian =
        (sortedSales[medianIndex] + sortedSales[medianIndex - 1]) / 2;
    } else {
      currentMedian = sortedSales[medianIndex];
    }

    if (currentMedian > highestMedian) {
      highestMedian = currentMedian;
      higestMedianAgentIndex = i;
    }
  });

  return higestMedianAgentIndex;
}

const higestMedianAgentIndex = findHighestMedianSaleAgent(salesOfAgents);
console.log(
  `Agent with index ${higestMedianAgentIndex} has the highest median sale`
);
