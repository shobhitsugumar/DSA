/**
 *501. Find Mode in Binary Search Tree https://leetcode.com/problems/find-mode-in-binary-search-tree/description/

       the problem is to find the repetative number in the binary tree 

       solution : the approach is we traverse the binary tree 
                  we need to store the value and its number of repeating .so we use map 
                  then we need a array to return the answer we store the answer in the array 
                  then we need a maxfreq variable so that  we compare if the value is greater than the maxfreq if yes then we update the result


 */

//solution

function ModeBinaray(root) {
  let freq = new Map();
  let result = [];
  let maxfreq = 0;

  function inorder(root) {
    if (!root) return;

    inorder(root.left);

    //we add the value in the map
    freq.set(root.val, (freq.get(root.val) || 0) + 1);

    //check if the value is greater than the max if yes then we update the max and the result
    if (freq.get(root.val) > maxfreq) {
      maxfreq = freq.get(root.val);
      result = [root.val];
    } else if (freq.get(root.val) === maxfreq) {
      //if the maxfreq and the umber of  repeating the value is same we just push it in the array
      result.push(root.val);
    }
    inorder(root.right);
  }

  inorder(root);
  return result;
}
