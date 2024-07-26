/*2130. Maximum Twin Sum of a Linked List  https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/description/

Example 1:


Input: head = [5,4,2,1]
Output: 6
Explanation:
Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.
There are no other nodes with twins in the linked list.
Thus, the maximum twin sum of the linked list is 6. 
Example 2:


Input: head = [4,2,2,3]
Output: 7
Explanation:
The nodes with twins present in this linked list are:
- Node 0 is the twin of node 3 having a twin sum of 4 + 3 = 7.
- Node 1 is the twin of node 2 having a twin sum of 2 + 2 = 4.
Thus, the maximum twin sum of the linked list is max(7, 4) = 7. 
Example 3:


Input: head = [1,100000]
Output: 100001
Explanation:
There is only one node with a twin in the linked list having twin sum of 1 + 100000 = 100001. */

/*solution : find the middle using slow and fast 
             reverse the second half 
             take start of the first linked list and prev of the second linked list and store it in max 


Time Complexity : O(n)
Space Complexity : O(1)
*/

function twinSum(list1, list2) {
  let fast = head;
  let slow = head;

  //finding the middle
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  //reversing the second half
  let prev = null;
  let curr = slow;
  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  let start = head;
  let sum = 0;
  let max = 0;

  while (prev !== null) {
    sum = start.val + prev.val;
    max = Math.max(max, sum);
    start = start.next;
    prev = prev.next;
  }
  return max;
}
