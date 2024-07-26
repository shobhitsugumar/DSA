//problem https://leetcode.com/problems/reorder-list/description/

/*

143. Reorder List

Input: head = [1,2,3,4]
Output: [1,4,2,3]

Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]

solution : using fast and slow find the middle 
           then reverse the second half reverse(slow.next)
           make the slow.next as null then join the two list 

time complexity : O(n)
space complexity :O(1)
*/

function reverse(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

var reorderList = function (head) {
  let fast = head;
  let slow = head;
  let t1 = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  newhead = reverse(slow.next);
  slow.next = null;
  let t2 = newhead;
  let n1 = t1;
  let n2 = t2;

  while (t1 !== null && t2 !== null) {
    if (t1) {
      n1 = t1.next;
      t1.next = t2;
      t1 = n1;
    }
    if (t2) {
      n2 = t2.next;
      t2.next = t1;
      t2 = n2;
    }
  }
  return head;
};
