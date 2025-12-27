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
      data: 2,
      right: null,
    },
  },
  data: 9,
  right: {
    left: {
      left: null,
      data: 5,
      right: null,
    },
    data: 8,
    right: {
      left: null,
      data: 4,
      right: null,
    },
  },
};

function isHeap(node) {
  if (!node) return true;
  const { left, data, right } = node;
  const isLeftHeap = isHeap(left);
  const isRightHeap = isHeap(right);
  if (left && data <= left.data) return false;
  if (right && data <= right.data) return false;
  return isLeftHeap && isRightHeap;
}

console.log(isHeap(list));
