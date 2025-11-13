var isSymmetric = function (root) {
  if (!root) return false;

  function backtracking(root1, root2) {
    if (root1 === null || root2 === null) {
      return root1 === root2;
    }

    return (
      root1.val === root2.val &&
      backtracking(root1.left, root2.right) &&
      backtracking(root1.right, root2.left)
    );
  }

  backtracking(root.left, root.right);
};
