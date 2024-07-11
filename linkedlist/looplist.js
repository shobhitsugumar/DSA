/*problem https://leetcode.com/problems/linked-list-cycle/description/
          https://www.naukri.com/code360/problems/cycle-detection-in-a-singly-linked-list_628974?utm_source=youtube&utm_medium=affiliate&utm_campaign=Codestudio_Linkedlistseries
*/

/*Solution 1. using hashmap ,traverse the list check if already the node is present if yes return true else add that node to map and go to next node 
           2. Using "Tortoise and Hare algorithm" 
*/
//--------------------------------------------------------------------------------------------------------------------------------------------------

//solution 2 (Tortoise and hare method)

function detectloop(head) {
  let fast = head;
  let slow = head;
  if (head === null || head.next === null) {
    return false; // not a loop
  }

  // this while condition is to check if the linked list is a linear list ,then it will reach null so it will not go inside the loop so we return null
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    //if it collides its a loop then we return true
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
