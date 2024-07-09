//problem find the middle of the list

//solution = optimized way is to use (tortoise and hare) algorithm

function createnode(value) {
  this.value = value;
  this.next = null;
}

function createlinkedlist(value) {
  let head = new createnode(value[0]);
  let tail = head;

  for (let i = 1; i < value.length; i++) {
    tail.next = new createnode(value[i]);
    tail = tail.next;
  }
  return head;
}

//solution

function middle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.value;
}

let list = createlinkedlist([1, 2, 3, 4, 5]);
console.log(middle(list));
