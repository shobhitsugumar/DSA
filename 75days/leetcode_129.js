var sumNumbers = function (root) {
  function dfs(node, current) {
    if (!node) return 0;

    // Form the current number
    current = current * 10 + node.val;

    // If it's a leaf → return the number formed
    if (!node.left && !node.right) {
      return current;
    }

    // Otherwise, go deeper
    return dfs(node.left, current) + dfs(node.right, current);
  }

  return dfs(root, 0);
};
