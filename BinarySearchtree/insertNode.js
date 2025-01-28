//the problem is to insert the node in the BINARY SEARCH TREE

/*

701. Insert into a Binary Search Tree : https://leetcode.com/problems/insert-into-a-binary-search-tree/description/


solution : is to  insert the node in the leaf 
           we keep on traversing 
                  1) if the val is less than the cur val then - * then we move left and check if its null if its null we insert the new node
                                                                   else we make the cur as cur.left 

                  2) if the val is greater than the cur val then - * then we move to right and check if its null if its null we insert the new node 
                                                                      else  we make the cur aas cur.right 
*/

function insertnode(root, val) {
  //base case if there is no root we return the val
  if (!root) return new TreeNode(val);

  let cur = root; // we take a cur so that we dont disturb the root .so we can return the root once we inserted the node

  while (true) {
    //case 1 if the cur val is greater than the val it should go left
    if (cur.val > val) {
      //here we check , as we move left if the left is null we add the new node else we go left again
      if (cur.left !== null) {
        cur = cur.left;
      } else {
        cur.left = new TreeNode(val);
        break;
      }
    }
    //case 2 if the cur val is greater than the val then we go right
    else {
      if (cur.val !== null) {
        cur = cur.right;
      } else {
        cur.right = new TreeNode(val);
        break;
      }
    }
  }
  return root;
}
