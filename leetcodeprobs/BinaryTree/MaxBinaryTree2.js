//problem :
/*
998. Maximum Binary Tree II


solution : is we compare the val with the root.val if the val is less than the roots value then we move right 
           if val is greater than the root then we stop there we create a new node with the val as value 
           then we make the newnode left as current root node and we return the new node 
           
*/
/////////////////////////////////////////.

var insertIntoMaxTree = function (root, val) {
  function backtracking(root) {
    if (!root) return new TreeNode(val);

    if (val < root.val) {
      root.right = backtracking(root.right);
      return root;
    } else {
      let newnode = new TreeNode(val);
      newnode.left = root;
      return newnode;
    }
  }
  return backtracking(root);
};
