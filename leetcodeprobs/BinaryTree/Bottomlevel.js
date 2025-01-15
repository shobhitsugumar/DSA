/**
 *
 *
 * problem :Bottom View of Binary Tree
 * https://www.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1
 * 
 * 
 * solution is same as we are using level order traversal 

 */
class Solution {
  //Function to return a list containing the bottom view of the given tree.
  bottomView(root) {
    //your code here
    if (!root) return [];
    let queue = [];
    let map = new Map();

    queue.push([root, 0]);

    while (queue.length > 0) {
      let [currentnode, x] = queue.shift();

      map.set(x, currentnode.data);

      if (currentnode.left) {
        queue.push([currentnode.left, x - 1]);
      }
      if (currentnode.right) {
        queue.push([currentnode.right, x + 1]);
      }
    }
    let ans = [];
    let sortedvalue = [...map.keys()].sort((a, b) => a - b);
    for (let i of sortedvalue) {
      ans.push(map.get(i));
    }
    return ans;
  }
}
