const data = {
  value: 8,
  left: {
    value: 4,
    left: {
      value: 2,
      left: null,
      right: null,
    },
    right: {
      value: 6,
      left: null,
      right: null,
    },
  },
  right: {
    value: 12,
    left: {
      value: 10,
      left: null,
      right: null,
    },
    right: {
      value: 14,
      left: null,
      right: null,
    },
  },
};

function isBST(node, min = -Infinity, max = Infinity) {
  if (!node) return true;

  if (node.value <= min || node.value >= max) {
    return false;
  }

  return (
    isBST(node.left, min, node.value) && isBST(node.right, node.value, max)
  );
}

console.log(isBST(data)); // true

/*
     8
   /   \
  4     12
 / \    / \
2   6  10 14
*/
