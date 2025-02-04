//problem :99. Recover Binary Search Tree : https://leetcode.com/problems/recover-binary-search-tree/description/
/*
solution : Brute force solution :we first traverse the array and put the value in the array 
                                 then we sort the array 
                                 we take a pointer p1 and we do another traversal in the tree 
                                 we check if the value in the root is equal to the pointer that pointing to the array 
                                 if not we change the value in thr root 
                                 Time Complexity : 1 traversal : O(n)
                                                   2 sorting the array : O(nlogn)
                                                   3 traversal :O(n)
                                                   so the time complexity : O(nlogn) since  the O(nlogn) dominates the O(n)
                                space complexity :O(n)

            Better solution :  To make this better solution we should not use any space and the time complexity should be O(n)
                               so what we can do is 
                                   1) the concept is , when we do inorder we get the value something like this [ 1,3,2,4]
                                      here the [1,3,2,4] we can see than the 2 is less than the 3 
                                      we keep a prev value ,intialie we take that as (prev =null)
                                      so we compare the root.val with the prev 
                                            
                                          here there can be two cases one is 
                                              > if the value lies adjacent 
                                                 For EG => [1,3,2,4] here the 3 and 2 are adjacent to each other 
                                             
                                              > if value lies far from each other 
                                                 For EG => [1,2,25,8,10,12,5] here the 25 and 5 are far from each other 
                                               
                                             so we declare 3 variable first middle last 

                                             why we declare middle ? as we see that in adjacent the value are closer to each other so we take the 
                                                                     first and middle and then we swap 
                                                                     incase if there is last we swap the first and last 
                                                   
                                                   FIRST TIME ECONUNTERING
                                               (*) if the root value is lesser than the prev then we mark the prev value as first 
                                                   and the root value as middle (intialie these first and middle will be declared as null)
                                                
                                                   SECOND TIME ENCOUNTERING 
                                               (*) we check if the first is not null we put the value in the last 

                                                   
                                                for eg :[1,3,2,4] here we encounter only one time that is 2 is smaller than 3 
                                                                  so we take the middle as 2 and  first as 3 
                                                                  then all the value are greter than the prev one 
                                                                  so ther is no last so we swap the middle and first value 

                                                    in eg2 [1,2,25,8,10,12,5] here we encounter first time the middle will be 8 and the first will be 25
                                                           then we keep on traversing to see any value is lesser than the prev one 
                                                           here we econunter second time the 5 is lesser than the 12 
                                                           so we see if first is null or already take .if its already taken then we put the 5 in the variable name last

                                                    Then we check if first and last present then we swap the value between fist and last 
                                                    if first and last is not there then we swap with middle and first 

                                                TIME COMPLEXITY : o(n)
                                                SPACE COMPLEXITY :O(1) ( we omit the recursion stack )
                                                
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                                            
                              

*/

//Brute force solution :
var recoverTree = function (root) {
  let arr = [];
  function backtracking(root) {
    if (!root) return null;

    backtracking(root.left);
    arr.push(root.val);
    backtracking(root.right);
  }
  backtracking(root);

  arr.sort((a, b) => a - b);

  //we get the arr now we have a pointer
  let p1 = 0;

  function correcttraversal(root) {
    if (!root) return null;

    correcttraversal(root.left);
    if (root.val !== arr[p1]) {
      root.val = arr[p1];
    }
    p1++;
    correcttraversal(root.right);
  }
  return correcttraversal(root);
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//better solution
var recoverTree = function (root) {
  let first = null;
  let middle = null;
  let last = null;
  let prev = null;

  function inorder(root) {
    if (!root) return null;

    inorder(root.left);

    if (prev !== null && root.val < prev.val) {
      if (first === null) {
        first = prev;
        middle = root;
      } else {
        last = root;
      }
    }
    prev = root;
    inorder(root.right);
  }

  inorder(root);
  if (first !== null && last !== null) {
    let t = first.val;
    first.val = last.val;
    last.val = t;
  } else if (first !== null && middle !== null) {
    let t = first.val;
    first.val = middle.val;
    middle.val = t;
  }
};
