//problem merge two sorted list https://leetcode.com/problems/merge-two-sorted-lists/description/

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

function mergeSortedlist(list1, list2) {
  let t1 = list1;
  let t2 = list2;
  let dummynode = new createnode(-1);
  let temp = dummynode;

  while (t1 !== null && t2 !== null) {
    if (t1.value < t2.value) {
      temp.next = t1;
      temp = t1;
      t1 = t1.next;
    } else {
      temp.next = t2;
      temp = t2;
      t2 = t2.next;
    }
  }
  if (t1) {
    temp.next = t1;
  } else {
    temp.next = t2;
  }
  return dummynode.next;
}
function printList(head) {
  let current = head;
  while (current !== null) {
    console.log("Value:", current.value);
    console.log("Next:", current.next ? current.next.value : null);

    current = current.next;
  }
}

let list1 = createlinkedlist([1, 2, 3]);
let list2 = createlinkedlist([0, 2, 4, 10]);
let rese = mergeSortedlist(list1, list2);
printList(rese);
