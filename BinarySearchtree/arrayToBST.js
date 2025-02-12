/**
 * problem 108. Convert Sorted Array to Binary Search Tree https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/
 *
 * Input: nums = [-10, -3, 0, 5, 9];Output: [0, -3, 9, -10, null, 5];
 *
 */

//solution

function arraytobst(nums) {
  function bst(left, right) {
    if (left > right) {
      return null;
    }
    let mid = Math.floor((right - left) / 2);

    let root = new TreeNode(nums[mid]);

    root.left = bst(left, mid - 1);
    root.right = bst(mid + 1, right);
    return root;
  }
  return bst(0, nums.length - 1);
}
