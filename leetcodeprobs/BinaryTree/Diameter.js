/*
problem :to find the longest diameter : 543. Diameter of Binary Tree
         https://leetcode.com/problems/diameter-of-binary-tree/description/

         Diameter : The diameter of a binary tree is the longest path between any two nodes in the tree.
                 
                   Can go through the root or any other node.
                   Is measured in terms of the number of edges, not nodes.



*/
//solution
function findDiameter(root) {
  let diameter = 0;

  function dia(root) {
    if (root === null) {
      return 0;
    }

    let left = dia(root.left);
    let right = dia(root.right);

    diameter = Math.max(diameter, left + right);

    return Math.max(left, right) + 1;
  }
  dia(root);
  return diameter;
}
