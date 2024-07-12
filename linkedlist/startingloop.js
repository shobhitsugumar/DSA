//problem find the staring point of the loop https://leetcode.com/problems/linked-list-cycle-ii/description/

/*solution 1. use hashmap 
           2. use Tortoise and hare  first detect the intersection and then set the slow again to head then traverse the slow and fast by one simoultanouesly 
*/

function startingloop(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      slow = head;
      while (slow !== fast) {
        slow = slow.head;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
}
