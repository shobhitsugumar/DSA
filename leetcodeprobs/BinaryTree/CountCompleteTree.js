var countNodes = function (root) {
  if (!root) return 0;

  let left = leftheight(root);
  let right = rightheight(root);

  if (left === right) {
    return (1 << left) - 1;
  }

  return 1 + countNodes(root.left) + countNodes(root.right);
};

function leftheight(root) {
  let count = 0;
  while (root) {
    count++;
    root = root.left;
  }
  return count;
}

function rightheight(root) {
  let count = 0;
  while (root) {
    count++;
    root = root.right;
  }
  return count;
}
