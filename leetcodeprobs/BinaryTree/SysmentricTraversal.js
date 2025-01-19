/**
 *



101. Symmetric Tree :https://leetcode.com/problems/symmetric-tree/description/
 *
 */

//solution

var isSymmetric = function (root) {
  function sysmentric(root1, root2) {
    if (root1 === null || root2 === null) {
      return root1 === root2;
    }

    return (
      root1.val === root2.val &&
      sysmentric(root1.left, root2.right) &&
      sysmentric(root1.right, root2.left)
    );
  }

  return sysmentric(root.left, root.right);
};
