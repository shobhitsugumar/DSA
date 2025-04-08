//problem :2130. Maximum Twin Sum of a Linked List  https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/description/?envType=study-plan-v2&envId=leetcode-75

var pairSum = function (head) {
  if (!head) return null;
  let max = -Infinity;

  function findmid(head) {
    let fast = head;
    let slow = head;

    while (fast !== null && fast.next.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  let mid = findmid(head);
  let s = mid.next;
  mid.next = null;

  function reverse(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }
  let t2 = reverse(s);

  function findmax(t1, t2) {
    while (t1 !== null && t2 !== null) {
      max = Math.max(t1.val + t2.val, max);
      t1 = t1.next;
      t2 = t2.next;
    }
    return max;
  }
  return findmax(head, t2);
};
