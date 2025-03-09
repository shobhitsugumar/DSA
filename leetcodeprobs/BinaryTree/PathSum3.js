//437. Path Sum III https://leetcode.com/problems/path-sum-iii/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * the solution is to keep track of the cur sum
 */

var pathSum = function (root, targetSum) {
  let result = 0;

  let map = new Map();

  const dfs = (root, map, targetSum, cursum) => {
    if (!root) return;

    cursum = cursum + root.val;

    if (cursum === targetSum) {
      result++;
    }

    if (map.has(cursum - targetSum)) {
      result += map.get(cursum - targetSum);
    }

    //update the map
    map.set(cursum, (map.get(cursum) || 0) + 1);

    dfs(root.left, map, targetSum, cursum);
    dfs(root.right, map, targetSum, cursum);

    map.set(cursum, map.get(cursum) - 1);
    if (map.get(cursum) === 0) {
      map.delete(cursum);
    }
  };
  dfs(root, map, targetSum, 0);
  return result;
};
