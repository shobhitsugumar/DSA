//problem : 1372. Longest ZigZag Path in a Binary Tree https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/description/

/**
 * solution : is to do dfs what we do is we traverse two time
 *            one for left and other for right
 *            we keep a flag true or false .if its true we go left or else we go right
 *
 */

function longesetZigzag(root) {
  let max = 0;
  //send 3 arguments in the function the root ,the flag (isleft) ,length
  function dfs(root, isleft, length) {
    if (!root) return;

    //if the flag is true we go left
    if (isleft) {
      dfs(root.right, false, length + 1); //if  the flag is true that mean now we  are in left so we go right
      dfs(root.left, true, 1); //in here the above going right is not there so we go left starting the count again as 1
    }
    //if the flag is false that means  we need to go left
    else {
      dfs(root.left, true, length + 1); //theis mean we need to go left and increase the length +1
      dfs(root.rigth, false, 1); // this means there is no left so again we go right but we start again with the value length as 1
    }
    return max;
  }
  dfs(root.left, true, 1); //we check for left
  dfs(root.right, false, 1); //we do this for right
}
