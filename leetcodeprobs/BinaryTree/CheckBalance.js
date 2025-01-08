/*problem : check the balance  :https://leetcode.com/problems/diameter-of-binary-tree/


solution : 1) is to use depth first search. (post order traveral )
              we need to find the height of the left and right then we do leftHeight - rightHeight if its <= 1 then its true 
              we again do the recursion for the next subtree of that node.
              Time Complexity : O(n^2)

              why for every node we check whthr the tree is balance i.e 1 ,then for 2 , then for 3 like wise 
    
            2) solution is to find the height of the left node and the right node  then we do leftnode - rightnode if its greater than the 1 then 
               we return -1 
               the time complexity is 0{n}





*/

//solution 1:

function checkbalance(root) {
  if (root === null) {
    return true;
  }

  // Calculate the height of left and right subtrees
  let leftHeight = getheight(root.left);
  let rightHeight = getheight(root.right);

  // Check if the absolute difference in heights
  // of left and right subtrees is <= 1
  if (
    Math.abs(leftHeight - rightHeight) <= 1 &&
    this.isBalanced(root.left) &&
    this.isBalanced(root.right)
  ) {
    return true;
  }

  //If any condition fails, the tree is unbalanced

  return false;
}

function getheight(root) {
  // Base case: if the current node is NULL,
  // return 0 (height of an empty tree)
  if (root === null) {
    return 0;
  }
  let left = getheight(root.left);
  let right = getheight(root.right);

  // Return the maximum height of left and right subtrees
  // plus 1 (to account for the current node)
  return Math.max(left, right) + 1;
}

//////////////////////////////////////////////////////////////////////////////////////////////////

//solution 2:

function balanced(root) {
  //base case
  if (root === null) {
    return true; //empty tree is consider as balanced so we return true
  }

  if (height(root) === -1) {
    return false;
  }

  return true;
}

function height(root) {
  if (root === null) {
    return 0;
  }

  let left = height(root.left);

  if (left === -1) {
    return -1;
  }

  let right = height(root.right);

  if (right === -1) {
    return -1;
  }

  if (Math.abs(left - right) > 1) {
    return -1;
  }

  return Math.max(left, right) + 1;
}
