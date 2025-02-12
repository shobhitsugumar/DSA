/**
 * problem :2415. Reverse Odd Levels of Binary Tree
            
            solution : better solution :we can use bfs(level order) but it uses extra space 
                                       in better solution what we do is we take a no to keep track of the odd level 
                                       then we reach the odd level we take a array where we put the value into it
                                       the array  holds the reference of the node we swap like we swap the value in the array same method using left and right 
                                       here we use extra space 

                       optimal solution : we use dfs we take same no to keep track of the level wheter we are in odd or even 
                                          we go extrem left and extrem right then in odd level we swap them 
                                          then we go left node right then in the right node lefe if thats in the odd level then we swap 
                                          Here we are not using any extra space so its optimized one 
 */

///bfs (level order ) here we use extra space
var reverseOddLevels = function (root) {
  let queue = [];
  let no = 0;

  queue.push(root);

  while (queue.length > 0) {
    let size = queue.length;
    let levelnode = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      if (no % 2 === 1) {
        levelnode.push(node);
      }

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    let left = 0;
    let right = levelnode.length - 1;
    while (left < right) {
      let temp = levelnode[left].val;
      levelnode[left].val = levelnode[right].val;
      levelnode[right].val = temp;
      left++;
      right--;
    }
    no++;
  }
  return root;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//dfs here we dont use any extra space

var reverseOddLevels = function (root) {
  if (!root) return root;

  function dfs(left, right, level) {
    if (left === null || right === null) return;

    if (level % 2 === 1) {
      let temp = left.val;
      left.val = right.val;
      right.val = temp;
    }

    dfs(left.left, right.right, level + 1);
    dfs(left.right, right.left, level + 1);
  }

  dfs(root.left, root.right, 1);
  return root;
};
