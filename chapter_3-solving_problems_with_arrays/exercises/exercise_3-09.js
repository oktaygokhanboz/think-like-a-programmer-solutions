// Rewrite of highest sales average, or highest sales median, by omit non-active months.

const sales = [
  [-1, -1, 30924, 87478, 328, 2653, 387, 3754, 387587, 2873, 276, -1],
  [5865, 5456, 3983, 6464, 9957, 4785, 3875, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, 265, 376, 232, 223, 4546, 564, 4544, 3434],
];

function getHigestAverage(saleList) {
  let sum = 0;
  let currentAverage;
  let highestAverage = 0;
  let activeSales;

  for (const agent of saleList) {
    activeSales = agent.filter((s) => s !== -1);
    sum = 0;
    for (const sale of activeSales) {
      sum += sale;
    }
    currentAverage = sum / activeSales.length;
    if (currentAverage > highestAverage) {
      highestAverage = currentAverage;
    }
  }

  return highestAverage.toFixed(2);
}

function getHighestMedian(saleList) {
  let activeSortedSales;
  let highestMedian = 0;
  let currentMedian;

  for (const agent of saleList) {
    activeSortedSales = agent.filter((s) => s !== -1).sort((a, b) => a - b);

    if (activeSortedSales.length % 2 === 0) {
      let sum =
        activeSortedSales[activeSortedSales.length / 2] +
        activeSortedSales[activeSortedSales.length / 2 - 1];
      currentMedian = sum / 2;
    } else {
      currentMedian =
        activeSortedSales[Math.floor(activeSortedSales.length / 2)];
    }

    if (currentMedian > highestMedian) {
      highestMedian = currentMedian;
    }
  }

  return highestMedian;
}

console.log("Highest avarange: " + getHigestAverage(sales));
console.log("Highest median: " + getHighestMedian(sales));
