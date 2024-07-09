/// problem add one to the linked list [1]=>[5]=>[9] +1
//output should be [1]=>[6]=>[0]
// another eg [9]=>[9]=>[9] + 1 , output= [1]=>[0]=>[0]=>[0]

//solution there are two way to solve this one
// 1. using normal way (reverse the linked ,then add one then again reverse )
// 2. using recursion

//1. using normal way

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

function add1(head) {
  let temp = head;
  let carry = 1; // we need to add one

  while (temp !== null) {
    temp.data = temp.data + carry;
    if (temp.data < 10) {
      carry = 0;
      break;
    } else {
      temp.data = 0;
      carry = 1;
    }
    temp = temp.next;
  }
  if (carry === 1) {
    //create a new node add make that as head and return before that reverse the list and add the new node
    let newnode = new createnode(1);
    newnode.next = head;
    return newnode;
  }
  head = reverse(head);
  return head;
}

///////////////////////////////////////////////////////////////////// 2 . recursion ////////////////////////////////////////////////////////

//helper function to do recursion and backtracking

function helper(temp) {
  if (temp === null) {
    return 1;
  }
  let carry = helper(temp.next);
  temp.data = temp.data + carry;
  if (temp.data < 10) {
    return 0;
  }
  temp.data = 0;
  return 1;
}

//this function is to check if there is a carry if there to add a new node

function carryfun(head) {
  let carry = helper(head); // using this function we do recursion(backtracking)
  if (carry === 1) {
    //create a new node and add it as head and return
    let newnode = new createnode(1);
    newnode.next = head;
    return newnode;
  }
  return head; // if carry is 0 return the head as it is
}
