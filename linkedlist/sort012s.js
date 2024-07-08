/* problem given list = [ 1,0,1,2,0,2,1] sort them in 0s ,1s ,2s
   output = [ 0,0,1,1,1,2,2] 
*/

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

///solution
function sort(head) {
  //we create three dummy nodes to store the 0 ,1, 2 values
  let zerohead = new createnode(-1);
  let onehead = new createnode(-1);
  let twohead = new createnode(-1);

  //to traverse these node
  let zero = zerohead;
  let one = onehead;
  let two = twohead;

  //to traverse the main list
  let temp = head;

  while (temp !== null) {
    if (temp.value === 0) {
      zero.next = temp;
      zero = zero.next;
    } else if (temp.value === 1) {
      one.next = temp;
      one = one.next;
    } else {
      two.next = temp;
      two = two.next;
    }
    temp = temp.next;
  }

  //now linkig the 0s ,1s ,2s
  zero.next = onehead.next ? onehead.next : twohead.next;
  one.next = twohead.next;
  two.next = null;

  //return the newhead
  let newhead = zerohead.next;
  return newhead;
}

function printList(head) {
  let current = head;
  while (current !== null) {
    console.log("Value:", current.value);
    console.log("Next:", current.next ? current.next.value : null);

    current = current.next;
  }
}

let list = createlinkedlist([1, 0, 1, 2, 0, 2, 1]);

let head = sort(list);

printList(head);
