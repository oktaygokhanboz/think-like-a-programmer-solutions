const list = {
  left: {
    left: {
      left: null,
      data: 4,
      right: null,
    },
    data: 7,
    right: {
      left: null,
      data: 12,
      right: null,
    },
  },
  data: 9,
  right: {
    left: {
      left: null,
      data: 15,
      right: null,
    },
    data: 18,
    right: {
      left: null,
      data: 24,
      right: null,
    },
  },
};

function isBinarySearchTree(binaryTree) {
  if (binaryTree === null) return true;
  const { left, data, right } = binaryTree;
  if (left && data <= left.data) return false;
  if (right && data >= right.data) return false;
  return isBinarySearchTree(left) && isBinarySearchTree(right);
}

console.log(isBinarySearchTree(list));
