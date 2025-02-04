/**
   problem : Two Sum IV - Input is a BST :https://leetcode.com/problems/two-sum-iv-input-is-a-bst/description/

   solution : 1)we take a array we do inorder traversal and push the value into the array so the array will be sorted 
                then we take 2 pointer one at the starting of the index and the other at the end of the index 
                 we sum up the pointer p1 and p2 then we compare if its less than the k then we move the right pointer 
                 if its greater than the k then we move the left side if  its equal then we return true

                 Time Complexity :O(n) +O(n) (for inorder its O(n) and for the 2 pointer its 0(n))
                 space Complexity :O(n) since we take the array to store the value 
              
              
              2) second solution is to take a hash set then we do k - value if it present in the array we return true .if its not present 
                 we add the value in the set like wise we check if the value is not in the set then we return false 
                 time complexity : O(n) 
                 space complexity : O(1)
 */

//solution

//solution 1
var findTarget = function (root, k) {
  let arr = [];

  function inorder(root) {
    if (!root) return null;

    inorder(root.left);
    arr.push(root.val);
    inorder(root.right);
  }
  inorder(root);

  let p1 = 0;
  let p2 = arr.length - 1;

  while (p1 < p2) {
    let sum = arr[p1] + arr[p2];
    if (sum === k) {
      return true;
    } else if (sum < k) {
      p1++;
    } else {
      p2--;
    }
  }
  return false;
};

/////////////////////////////////////////////////////////////////////////////////////////////////
//solution 2

var findTarget = function (root, k) {
  let set = new Set();

  function backtracking(root) {
    if (root === null) return false;

    if (set.has(k - root.val)) {
      return true;
    }
    set.add(root.val);

    // we go right if there is no value we return false
    return backtracking(root.left) || backtracking(root.right);
  }
  return backtracking(root);
};
