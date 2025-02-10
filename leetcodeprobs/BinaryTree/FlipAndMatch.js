/**
 * 971. Flip Binary Tree To Match Preorder Traversal
 *
 * eg :Input: root = [1,2,3], voyage = [1,3,2]
 * Output: [1]
 * Explanation: Flipping node 1 swaps nodes 2 and 3, so the pre-order traversal matches voyage.
 *
 * solution :we check if the root is equal to the voyage if its not we return false
 *           then we check if the left of the root is equal to the voyage if not the we swap the node
 *           then we push the root.val in to the arra y
 */

function flip(root, voyage) {
  let res = [];
  let p = 0;

  function backtracking(root) {
    if (!root) return true;

    if (root.val !== voyage[p]) {
      return false;
    }
    if (root.left.val !== voyage[p]) {
      //push the val in to the array
      res.push(root.val);
      //swap the left to right and right to left
      let temp = root.left;
      root.left = root.right;
      root.right = temp;
    }

    return backtracking(root.left) && backtracking(root.right);
  }
  return backtracking(root) ? res : [-1];
}
