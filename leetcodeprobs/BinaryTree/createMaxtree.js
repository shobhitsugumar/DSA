//solution :654. Maximum Binary Tree :https://leetcode.com/problems/maximum-binary-tree/description/
/*
Input: nums = [3,2,1,6,0,5]
Output: [6,3,5,null,2,0,null,null,1]
Explanation: The recursive calls are as follow:
- The largest value in [3,2,1,6,0,5] is 6. Left prefix is [3,2,1] and right suffix is [0,5].
    - The largest value in [3,2,1] is 3. Left prefix is [] and right suffix is [2,1].
        - Empty array, so no child.
        - The largest value in [2,1] is 2. Left prefix is [] and right suffix is [1].
            - Empty array, so no child.
            - Only one element, so child is a node with value 1.
    - The largest value in [0,5] is 5. Left prefix is [0] and right suffix is [].
        - Only one element, so child is a node with value 0.
        - Empty array, so no child.


*/

var constructMaximumBinaryTree = function (nums) {
  function tree(arr) {
    if (arr.length === 0) {
      return null;
    }
    let greater = -Infinity;
    let index = -1;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > greater) {
        greater = arr[i];
        index = i;
      }
    }
    let left = tree(arr.slice(0, index));
    let right = tree(arr.slice(index + 1));

    let newtree = new TreeNode(greater);
    newtree.left = left;
    newtree.right = right;

    return newtree;
  }
  return tree(nums);
};
