/**
 * problem : 987. Vertical Order Traversal of a Binary Tree
 * https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/description/
 * 

solution : is to use a map data structure to store the cordinates x and y (x is the vertical axis and y is the level of the node )

           in the map we store the value as {x value ,{y value ,[node val]}}

           we store y value because to sort the val and display them from up to down 

           we traverse the node by using level order traversal 

 */
var verticalTraversal = function (root) {
  if (!root) return [];
  let queue = [];
  let map = new Map();

  queue.push([root, [0, 0]]);

  while (queue.length > 0) {
    let [currentnode, [x, y]] = queue.shift();

    if (!map.has(x)) {
      map.set(x, new Map());
    }
    //lever order we need to sort them and put them according to the order of the tree
    if (!map.get(x).has(y)) {
      map.get(x).set(y, []);
    }

    map.get(x).get(y).push(currentnode.val);

    if (currentnode.left) {
      queue.push([currentnode.left, [x - 1, y + 1]]);
    }
    if (currentnode.right) {
      queue.push([currentnode.right, [x + 1, y + 1]]);
    }
  }

  let outerkey = [...map.keys()].sort((a, b) => a - b);

  let ans = [];

  for (let x of outerkey) {
    let col = [];
    let innermap = map.get(x);
    const sortedkey = [...innermap.keys()].sort((a, b) => a - b);

    for (let res of sortedkey) {
      col.push(...innermap.get(res).sort((a, b) => a - b));
    }
    ans.push(col);
  }
  return ans;
};
