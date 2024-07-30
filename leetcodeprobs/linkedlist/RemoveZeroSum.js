//porblem 1171. Remove Zero Sum Consecutive Nodes from Linked List
//              https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/description/

/*
Example 1:

Input: head = [1,2,-3,3,1]
Output: [3,1]
Note: The answer [1,2,1] would also be accepted.
Example 2:

Input: head = [1,2,3,-3,4]
Output: [1,2,4]
Example 3:

Input: head = [1,2,3,-3,-2]
Output: [1]
 */

/* solution : is to create a dummynode and a hashmap 

*/

function removeZero(head) {
  let dummynode = new ListNode(0, head);
  let sumMap = new Map();
  let sum = 0;

  // First pass: store prefix sum with node reference
  let current = dummynode;
  while (current) {
    sum += current.val;
    sumMap.set(sum, current);
    current = current.next;
  }

  //second pass : remove zero-sum sequence
  current = dummynode;
  sum = 0;
  while (current) {
    sum += current.val;
    current.next = sumMap.get(sum).next;
    current = current.next;
  }

  return dummynode.next;
}
