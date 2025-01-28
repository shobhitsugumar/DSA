//https://www.geeksforgeeks.org/problems/implementing-ceil-in-bst/1
//Ceil in BST

class Solution {
  // Function to return the ceil of given number in BST.
  findCeil(root, input) {
    // your code here

    let ceil = -1;
    while (root !== null) {
      if (root.data === input) {
        return root.data;
      }

      if (input > root.data) {
        root = root.right;
      } else {
        ceil = root.data;
        root = root.left;
      }
    }
    return ceil;
  }
}
