//find the nth index from the last
// problem  =   https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

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

function findnth(head, n) {
  let first = head;
  let second = head;

  for (let i = 0; i < n; i++) {
    first = first.next;
  }
  while (first.next !== null) {
    second = second.next;
    first = first.next;
  }
  //edge case if n = 5
  if (first === null) {
    return head.next;
  }
  second.next = second.next.next;
  return head;
}

function printvalue(head) {
  let current = head;
  while (current !== null) {
    console.log("value", current.value);
    console.log("next", current.next ? current.next.value : null);

    current = current.next;
  }
}

let list = createlinkedlist([1, 2, 3, 4, 5]);

const res = findnth(list, 2);

printvalue(res);
