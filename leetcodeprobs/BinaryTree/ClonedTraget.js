/**
 *  1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree :https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/description/
 * 
 * 
 * solution : Two ways we can solve  = BFS ,DFS
 *                   
 *           
 *              

 */

//DFS
var getTargetCopy = function (original, cloned, target) {
  function backtracking(original, cloned, target) {
    if (!original) return null;

    if (original === target) return cloned;

    let left = backtracking(original.left, cloned.left, target);

    if (left) return left;

    return backtracking(original.right, cloned.right, target);
  }
  return backtracking(original, cloned, target);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//BFS
var getTargetCopy = function (original, cloned, target) {
  let queue = [[original, cloned]];

  while (queue.length) {
    let [origNode, cloneNode] = queue.shift();

    if (origNode === target) return cloneNode;

    if (origNode.left) queue.push([origNode.left, cloneNode.left]);
    if (origNode.right) queue.push([origNode.right, cloneNode.right]);
  }

  return null;
};
