//problem :450. Delete Node in a BST https://leetcode.com/problems/delete-node-in-a-bst/description/

/*
solution : solution is to find the node that to be deleted and attach the node node to the left or right node 
                    we here use three function 1) main function to find the node 
                                               2) function is to attach the node 
                                               3) function is a function that helps the 2 function to 
                                               find the right side of the node 

*/

var deleteNode = function (root, key) {
  if (!root) return root;

  if (root.val === key) {
    return helper(root);
  }

  let dummy = root;

  while (root !== null) {
    if (root.val > key) {
      if (root.left !== null && root.left.val === key) {
        root.left = helper(root.left);
      } else {
        root = root.left;
      }
    } else {
      if (root.right !== null && root.right.val == key) {
        root.right = helper(root.right);
      } else {
        root = root.right;
      }
    }
  }

  return dummy;
};

function helper(root) {
  if (root.left === null) {
    return root.right;
  }
  if (root.right === null) {
    return root.left;
  }

  let rightside = root.right;
  let leftlastright = findlastright(root.left);
  leftlastright.right = rightside;

  return root.left;
}

function findlastright(root) {
  if (root.right === null) {
    return root;
  }
  return findlastright(root.right);
}
