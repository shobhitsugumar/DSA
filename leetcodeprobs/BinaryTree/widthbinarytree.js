/*
problem : 662. Maximum Width of Binary Tree 

          1 .solution we can solve this by using the indexing method 
           
          for left te formula is : (2 * currentnodepos +1 ) => (2* 0 +1 = 1) ; (2 * 1 +1 = 3)
          for right the formula is  : (2 * currentnodepos +2 )=> (2 * 0 +2  = 2) ; (2 * 0 +2 = 4)

          but the above method wont work for every thing for skew if we try it will go over flow 

         2. here the indexing will be  0 - 1,2 - 3 4 5 6 

          so we do the second solution same 
          here the indexing will be 0 - 1 2 , 1 2 3 4 
          so that the stack will not over flow  so we take the min of then we sub with the current index 
          i.e if the min index is 1 and current node is 2  then 2 -1  =1 => keep this value as j 

          then we set the pos as 2 * j +1 for left and for right 2 * j +2 


*/
///////////////////////////////////////////////////////////////

//solution based on first one
var widthOfBinaryTree = function (root) {
  if (!root) return 0;

  let ans = 0;

  let queue = [];

  queue.push({ node: root, pos: 0 });

  while (queue.length > 0) {
    let size = queue.length;

    let first, last;

    for (let i = 0; i < size; i++) {
      let currentnode = queue.shift();

      if (i === 0) {
        first = currentnode.pos;
      }
      if (i === size - 1) {
        last = currentnode.pos;
      }

      if (currentnode.node.left) {
        queue.push({
          node: currentnode.node.left,
          pos: 2 * currentnode.pos + 1,
        });
      }

      if (currentnode.node.right) {
        queue.push({
          node: currentnode.node.right,
          pos: 2 * currentnode.pos + 2,
        });
      }
    }

    ans = Math.max(ans, last - first + 1);
  }
  return ans;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//2 indxing based on second one
var widthOfBinaryTree = function (root) {
  if (!root) {
    return 0;
  }

  let ans = 0;

  let queue = [];
  queue.push({ node: root, pos: 0 });

  while (queue.length > 0) {
    let size = queue.length;

    let min = queue[0].pos;
    let first, last;

    for (let i = 0; i < size; i++) {
      let currentind = queue[0].pos - min;

      let cnode = queue[0].node;

      queue.shift();

      if (i === 0) {
        first = currentind;
      }
      if (i === size - 1) {
        last = currentind;
      }

      if (cnode.left) {
        queue.push({ node: cnode.left, pos: 2 * currentind + 1 });
      }

      if (cnode.right) {
        queue.push({ node: cnode.right, pos: 2 * currentind + 2 });
      }
    }
    ans = Math.max(ans, last - first + 1);
  }
  return ans;
};
