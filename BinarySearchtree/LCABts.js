//probelem :235. Lowest Common Ancestor of a Binary Search Tree => https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/

/*
solution : one is to use the same lca as we used in the binary tree 
           the other one is the concept is same but we do recursion for left if the p and q lies in the left 
           if q  and q lies in the left the p q should be less than the root then we do root.left
           if the p and q lies in the right the p q should be greater than the root the we do root.right
           if p lies in the left and q lies in the right we return the root 

           for the last condition if p lies in the left and q is in right 
           we  do simple condition if the p is less than the root and the if suppose the root is greater than the p the we return root 



*/

//solution 2
var lowestCommonAncestor = function (root, p, q) {
  function backtracking(root) {
    if (!root) return root;

    //left side if the p and q lies in the left , we check if the q and q is less than the root
    if (root.val > p.val && root.val > q.val) {
      return backtracking(root.left);
    }
    //rightside if the p and q lies in the right , we check if the root is less  than the p and q
    else if (root.val < p.val && root.val < q.val) {
      return backtracking(root.right);
    }
    //if both are false then we return the root // this condition if the p lies in the left and q lies in the right
    else {
      return root;
    }
  }

  return backtracking(root);
};
