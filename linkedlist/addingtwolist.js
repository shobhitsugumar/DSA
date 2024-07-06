/*click the link to check the question 

https://www.naukri.com/code360/problems/add-two-numbers_1170520?utm_source=youtube&utm_medium=affiliate&utm_campaign=Codestudio_Linkedlistseries
*/

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

function addingtwonode(list1, list2) {
  let t1 = list1;
  let t2 = list2;
  let dummynode = new createNode(-1);
  let current = dummynode;
  let carry = 0;

  while (t1 !== null && t2 !== null) {
    let x = t1 !== null ? t1.value : 0;
    let y = t2 !== null ? t2.value : 0;
    let sum = carry + x + y;
    current.next = new createNode(sum % 10);
    current = current.next;
    carry = Math.floor(sum / 10);

    if (t1) {
      t1 = t1.next;
    }
    if (t2) {
      t2 = t2.next;
    }
  }
  if (carry) {
    let newnode = new createNode(carry);
    current.next = newnode;
  }
  return dummynode.next;
}

let list1 = createlinkedlist([13, 4]);
let list2 = createlinkedlist([4, 6]);

console.log(addingtwonode(list1, list2));
