//searching in binary tree

function binarySearch(root, val) {
  while (root !== null && root.val !== val) {
    root = val < root.val ? root.left : root.right;
  }
  return root;
}
