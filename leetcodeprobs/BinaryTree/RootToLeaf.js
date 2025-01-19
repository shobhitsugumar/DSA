/**
 * problem : Root to Leaf
 *
 *
 * solution : is to take a array to store the value and later we put the value back into  anohter arr
 */
function Paths(root) {
  // code here
  let result = [];

  function backtracking(root, path) {
    if (!root) {
      return;
    }

    path.push(root.data);

    if (!root.left && !root.right) {
      result.push([...path]);
    } else {
      backtracking(root.left, path);
      backtracking(root.right, path);
    }
    path.pop();
  }
  if (root) {
    backtracking(root, []);
  }

  return result;
}
