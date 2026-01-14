const data = {
  value: 8,
  left: null,
  right: null,
};

function addValueToBST(node, newValue) {
  if (node === null) {
    return { value: newValue, left: null, right: null };
  }

  if (newValue < node.value) {
    node.left = addValueToBST(node.left, newValue);
  } else if (newValue > node.value) {
    node.right = addValueToBST(node.right, newValue);
  } else {
    throw new Error("Input does not valid for Binary Search Tree!");
  }

  return node;
}

addValueToBST(data, 7);
addValueToBST(data, 10);
addValueToBST(data, 9);
addValueToBST(data, 10.5);
addValueToBST(data, 6);
addValueToBST(data, 7.5);
console.log(data);
