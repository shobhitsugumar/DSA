/*
98. Validate Binary Search Tree :https://leetcode.com/problems/validate-binary-search-tree/description/



solution : is to use backtracking 
           the concept is the root should be greater than the leftsub root and lesser than the right sub root 
           i.e : left sub root < root < right sub root 
          
           we take min and max to maintain a range we check if the current root is within the range 
           with the range of [min.........max] the root should lies between the range 


*/
var isValidBST = function (root) {
  function backtracking(root, min, max) {
    if (!root) return true;

    //checking the range if the min is greater than the root or if the root is greater than the max we return false
    if (min >= root.val || root.val >= max) {
      return false;
    }

    return (
      backtracking(root.left, min, root.val) &&
      backtracking(root.right, root.val, max)
    );
  }
  return backtracking(root, -Infinity, Infinity);
};
