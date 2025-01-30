//problem : https://leetcode.com/problems/validate-binary-search-tree/description/

/**
 *
 * 98. Validate Binary Search Tree
 */

//solution : we use inorder traversal and we put that in the arr
//           the catch in binary search tree if we do in order traversal it will be sorted
// so here we do inorder traversal and put that value in the arr and return the 3rd index

var kthSmallest = function (root, k) {
  if (!root) return root;

  let arr = [];

  function back(root) {
    if (root === null) {
      return;
    }

    back(root.left);
    arr.push(root.val);
    back(root.right);
  }
  back(root);

  return arr[k - 1];
};
