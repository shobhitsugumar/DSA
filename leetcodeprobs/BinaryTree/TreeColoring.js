//problem : 1145. Binary Tree Coloring Game https://leetcode.com/problems/binary-tree-coloring-game/description/
/**
 * Input: root = [1,2,3,4,5,6,7,8,9,10,11], n = 11, x = 3
   Output: true

 * solution :The goal of the game is for Player 2 (you) to color more nodes than Player 1.

              Since n (total number of nodes) is odd, the maximum number of nodes any player can color is strictly greater than n/2.


               Key Observation
               Player 1 colors node x first.
               This splits the tree into three parts:
               Left subtree of x (nodes under x.left)
               Right subtree of x (nodes under x.right)
               Remaining nodes (everything except x and its direct subtrees)
   
   
               step one find the x 
               so once we found the x then we find the left and right length of the x 
               and the remaining length of the binary tree 
        
 */

//in js
var btreeGameWinningMove = function (root, n, x) {
  //find the x
  function dfs(root, x) {
    if (!root) return null;

    if (root.val === x) {
      return root;
    }

    let left = dfs(root.left, x);
    if (left) return left;

    let right = dfs(root.right, x);
    return right;
  }
  let foundnode = dfs(root, x);

  //find the length of that x left sub tree and right sub tree

  function length(root) {
    if (!root) return 0;

    let leftcount = length(root.left);
    let rightcount = length(root.right);

    return 1 + (leftcount + rightcount);
  }
  let leftlength = length(foundnode.left);
  let rightlength = length(foundnode.right);

  //remaing node length
  let remainglength = n - (leftlength + rightlength + 1);

  //now we have the left length and right lenth
  //now we check if the x left or right or the remaing node is greater than than the n/2
  if (leftlength > n / 2 || rightlength > n / 2 || remainglength > n / 2) {
    return true;
  } else {
    return false;
  }
};

// in java
/*
class Solution {
    public boolean btreeGameWinningMove(TreeNode root, int n, int x) {
        //find the x by calling the function 
        TreeNode foundnode = findnode(root,x);

        //find the leftlength and right lenght 
        int leftlength = findlength(foundnode.left);
        int rightlength = findlength(foundnode.right);

        int remainginglength = n - (leftlength +rightlength +1);

        if(leftlength > n/2 || rightlength > n/2 || remainginglength >n/2){
            return true;
        }
        else{
            return false;
        }
        
    }
    //to find the node x and retur that node 
    private TreeNode findnode(TreeNode root ,int x){
        if(root == null) return null;

        if(root.val ==x)return root;

        TreeNode left = findnode(root.left,x);
        if(left !=null) return left;

        TreeNode right = findnode(root.right,x);
        return right ; 
    }

    //find the  length of the left and right subtree of that foundnode
    private int findlength(TreeNode root){
        if(root==null)return 0;

        int left = findlength(root.left);
        int right = findlength(root.right);

        return 1 + left + right ;
    }

}
    */
