/**
 problem : https://leetcode.com/problems/binary-tree-maximum-path-sum/submissions/1503741710/
           124. Binary Tree Maximum Path Sum

           solution : is to use backtracking method like we used for finding the height and diameter 
                      

           approach : we keep track of sum we go depth to find the leaf node 
                      then we return we solve it like umberla partern 
                      see the code to understand 
                      
 */

//solution

function maxsum(root) {
  let max = -Infinity; // we take infinity in order to handle negative value  also

  function maxpath(root) {
    if (root === null) {
      return 0;
    }

    let left = Math.max(0, maxpath(root.left)); //the Math.max is because incase if it returns left as any negative value we take it as 0
    let right = Math.max(0, maxpath(root.right)); //""

    max = Math.max(max, left + right + root.val);

    return root.val + Math.max(left, right); // we return node.val + and we return which path node is greater if its left or right
  }
  return max;
}
