/* 
2816. Double a Number Represented as a Linked List :  https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/description/

Input: head = [1,8,9]
Output: [3,7,8]
Explanation: The figure above corresponds to the given linked list which represents the number 189. Hence,
the returned linked list represents the number 189 * 2 = 378.


solution : 1. reverse the list and traverse the list and  multiply it  by 2 and at if the list got over but carry is there add a new list at last 
              and return the reversed list 
              
              TIME COMPLEXITY =O(n)

           2. The second way is we dont reverse the list 
              - initalie we add a new node(0,head) at the starting of the list then we take two pointer prev and current 
                prev pointing to the newly created node and current will be new.next 
              - if the current is > than 4 then we add 1 to the prev val the we change the value of the current 
                if the current is < than 4 we just change the value of the current
                
            TIME COMPLEXITY O(n) - but this one is more efficient than the sol 1 ,because we are not reversing the linked ,which takes lot time

          3. using recursion 

*/

//solution 1

function doubletheList(head) {
  let newhead = reverse(head);
  let temp = head;
  let carry = 0;
  while (temp !== null) {
    let value = temp.val * 2 + carry;
    temp.val = value % 10;
    carry = Math.floor(value / 10);
    if (temp.next === null) break;
    temp = temp.next;
  }
  if (carry) {
    t1.next = new ListNode(carry);
  }
  return reverse(newhead);
}

///////////////////////// solution

function doubletheList(head) {
  let head = new ListNode(0, head);
  let prev = head;
  let current = head.next;

  while (current !== null) {
    if (current.val > 4) {
      prev.val++;
    }
    current.val = (current.val * 2) % 10;
    prev = prev.next;
    current = current.next;
  }
  if (head.val === 0) {
    return head.next;
  }
  return head;
}

//solution 3

var doubleIt = function (head) {
  function multiply(current) {
    if (current === null) {
      return 0;
    }
    let carry = multiply(current.next);
    let total = current.val * 2 + carry;
    current.val = total % 10;
    return Math.floor(total / 10);
  }

  let carry = multiply(head);
  if (carry) {
    let newhead = new ListNode(1, head);
    return newhead;
  }
  return head;
};
