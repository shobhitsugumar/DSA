var maxDepth = function (root) {
  if (!root) return 0;
  let max = 0;

  function dfs(root, count) {
    if (!root) return;

    dfs(root.left, count + 1);
    dfs(root.right, count + 1);
    max = Math.max(max, count);
  }
  dfs(root, 1);
  return max;
};
