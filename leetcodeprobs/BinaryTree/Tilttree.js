/*
563. Binary Tree Tilt  https://leetcode.com/problems/binary-tree-tilt/description/

*/

//solution

var findTilt = function (root) {
  let totalTilt = 0;

  calculateSum = (node) => {
    if (node === null) return 0;

    const leftSum = calculateSum(node.left);
    const rightSum = calculateSum(node.right);

    const tilt = Math.abs(leftSum - rightSum);
    totalTilt += tilt;

    return leftSum + rightSum + node.val;
  };

  calculateSum(root);

  return totalTilt;
};
