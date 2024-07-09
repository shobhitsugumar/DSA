function creatnode(value) {
  this.value = value;
  this.next = null;
}

function createlinkedlist(value) {
  let head = new creatnode(value);
  let tail = head;

  for (let i = 0; i < value.length; i++) {
    tail.next = new creatnode(value[i]);
    tail = tail.next;
  }
  return head;
}

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

let list1 = createlinkedlist([1, 2, 3, 4]);
console.log(reverse(list1));

///////////////////////////////////////////////////////  using recursion /////////////////////////////////////////////////////////////////////////
/*
function reverse(head) {
  if (head === null || head.next === null) {
    return head;
  }

  let newhead = reverse(head.next);
  let front = head.next;
  front.next = head;
  head.next = null;
  return newhead;
}

let list1 = createlinkedlist([1, 2, 3, 4]);
console.log(reverse(list1));
*/
