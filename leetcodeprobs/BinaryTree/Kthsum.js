//problem 2583. Kth Largest Sum in a Binary Tree  https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/description/

/*solution : 1 ) is to do bfs we go step but step and add that in to the array and lastly we sort the array and return the kth value from the array
                 time complexity : for bfs O(n) for sorting O(n logn)

              2) solution is to use the same bfs but to take a and we sort while entering the sum itself
                 if the mapheap length exceeds the k then we remove the first element (shift()) 
                 then at last we return the first element of  the mapheap
*/

//solution 1

var kthLargestLevelSum = function (root, k) {
  let queue = [];
  let ans = [];

  queue.push(root);

  while (queue.length > 0) {
    let size = queue.length;
    let sum = 0;

    for (let i = 0; i < size; i++) {
      let currentnode = queue.shift();

      sum = sum + currentnode.val;

      if (currentnode.left) {
        queue.push(currentnode.left);
      }

      if (currentnode.right) {
        queue.push(currentnode.right);
      }
    }
    ans.push(sum);
  }
  if (k > ans.length) return -1;

  ans.sort((a, b) => b - a);

  return ans[k - 1];
};
