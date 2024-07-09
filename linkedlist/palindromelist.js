//problem https://leetcode.com/problems/palindrome-linked-list/description/

class createNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function createlinkedlist(value) {
  let head = new createNode(value[0]);
  let tail = head;

  for (let i = 1; i < value.length; i++) {
    tail.next = new createNode(value[i]);
    tail = tail.next;
  }
  return head;
}

//solution

//reverse function
function reverse(head) {
  let current = head;
  let prev = null;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev; //this will be out newhead
}

function palindrome(head) {
  //find the middle
  let slow = head;
  let fast = head;

  //here we need to find the m1 not m2 so we need to stop before
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //the middle will be in slow
  let middle = slow;

  //now reverse the value after the middle
  let newhead = reverse(middle.next); //we will get the newhead=reverse([3,2,1]) after reverse the value will be = [1]=>[2]=>[3]  [1 will be head]

  //now compare the values
  let first = head;
  let second = newhead;

  while (second !== null) {
    if (first.value !== second.value) {
      //before returning reverse the list and make it to normal
      reverse(newhead);
      return false;
    }
    // we traverse
    first = first.next;
    second = second.next;
  }
  reverse(newhead);
  return true;
}

let list = createlinkedlist([1, 2, 3, 2, 1]);

console.log(palindrome(list));
