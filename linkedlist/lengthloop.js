/*find the length of the loop :https://www.naukri.com/code360/problems/find-length-of-loop_8160455?utm_source=youtube&utm_medium=affiliate&utm_campaign=Codestudio_Linkedlistseries

solution 1. using hashmap .
         2. we use Tortoise and Hare algorithm 
*/

//Tortoise and hare

//find the legnth method
//intialy the slow and fast will be same node .. we only call this function if slow ===fast
function findlength(slow, fast) {
  let count = 1; //to find the length
  find = find.next;
  while (slow !== fast) {
    count++;
    fast = fast.next; //we move by 1 throught the loop the count will increase if we reach the node we return the count
  }
  return count;
}

//first we find the intersection of slow and fast
function intersection(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return findlength(slow, fast);
    }
  }
  return 0;
}
