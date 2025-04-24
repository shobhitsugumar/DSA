//problem :https://leetcode.com/problems/same-tree/   100. Same Tree

var isSameTree = function (node1, node2) {
  if (node1 === null && node2 === null) {
    return true;
  }
  if (node1 === null || node2 === null) {
    return false;
  }

  return (
    node1.val === node2.val &&
    isSameTree(node1.left, node2.left) &&
    isSameTree(node1.right, node2.right)
  );
};

/*
var isSameTree = function(node1, node2) {

    
  if(node1 === null&& node2===null){
      return true
  }
  if(node1===null || node2===null){
      return false
  }

  return (node1.val === node2.val) && isSameTree(node1.left,node2.left) && isSameTree(node1.right,node2.right)
  

  
};
*/
