/*1008. Construct Binary Search Tree from Preorder Traversal  https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/description/

solution : 1) we can construct this by using the preorder inorder traversal 
              [8,1,5,7,10,12]  we do the inorder traversal => so the inorder will be sorted [1,5,7,8,10,12]
              preroder=[8,1,5,7,10,12] Root ,left ,right => so the root is 8 
              inorder = [1,5,7,8,10,12]  the value which are  left to root 8 will be the left sub tree [1,5,7]
                                         the value which  are right to the root 8 will be right sub tree [10,12]
              then we create the tree 
              Time Complexity : 0(n log n ) for inorder and 0(n) for travesing the array 
            
            2) solution 2 is to take the first element as root i.e [8,1,5,7,10,12] here the 8 will the root and the value which are less than 8
               lies in the left and greter than 8 lies in the right 
               we keep index variable to keep track of the index if the index === preorderarray.length we return null 

               1) we take range [low high] we intiale take them as [-Infinity ,Infinity] the root 8 will lies in between them 
                  then we do index ++ now the index will be 1 

                  then we go left we check if the index === preorderarray.length if it is we return null 
                  then we check if the value lies between the range the range will be for left [-Infinity , 8]
                        *) if it lies between them then we add the root to the left if not we return null 
                  then we go right the range will be [1,5] it does not lies so we return null to the right 

                  then again we repeat 

                  

*/

//solution

function treenode(preorder) {
  let index = 0;

  function backtracking(low, high) {
    if (index === preorder.length) return null;

    const val = preorder[index];

    if (val < low || val > high) {
      return null;
    }

    let newtree = new TreeNode(val);
    index++;

    // Recursively build the left subtree with the updated upper bound
    root.left = backtracking(low, val);

    // Recursively build the right subtree with the updated lower bound
    root.right = backtracking(val, upper);

    return root;
  }
  return backtracking(-Infinity, Infinity);
}
