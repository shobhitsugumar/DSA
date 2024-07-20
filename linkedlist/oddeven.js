//odd or even by index
// given list [4,2,6,7,1,3]
//output => [4,6,1,2,7,3] (i.e) first arrange the odd index in the linked list and then the even
//odd [4,6,1] + even [2,7,3] = [4,6,1,2,7,3]

function createnode(value) {
  this.value = value;
  this.next = null;
}

function createlinkedlis(value) {
  let head = new createnode(value[0]);
  let tail = head;

  for (let i = 1; i < value.length; i++) {
    tail.next = new createnode(value[i]);
    tail = tail.next;
  }
  return head;
}
function printList(head) {
  let current = head;
  while (current !== null) {
    console.log("Value:", current.value);
    console.log("Next:", current.next ? current.next.value : null);

    current = current.next;
  }
}
/// solution odd and even indexing

function oddeven(head) {
  let odd = head;
  let even = head.next;
  let evenhead = head.next;

  while (even !== null && even.next !== null) {
    odd.next = odd.next.next;
    even.next = even.next.next;

    //this is to traverse the odd and even in the list
    odd = odd.next;
    even = even.next;
  }
  odd.next = evenhead;
  return head;
}

let list = createlinkedlis([4, 2, 6, 7, 1, 3]);
let res = oddeven(list);

printList(res);
