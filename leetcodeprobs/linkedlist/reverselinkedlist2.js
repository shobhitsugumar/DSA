//problem  https://leetcode.com/problems/reverse-linked-list-ii/description/

//Given the head of a singly linked list and two integers left and right where left <= right
//reverse the nodes of the list from position left to position right, and return the reversed list

//Input: head = [1,2,3,4,5], left = 2, right = 4
//Output: [1,4,3,2,5]

/*solution : 1. we take a dummy node assign it as prev then we find the start(left) then we find the end(right) we save the end.next node then we make the end.next as null
                then we reverse the node by calling reverse(start) function then we link the nodes 
best waytodo 2. is using in place linked list reverse algorithm we take a dummynode then find the start(left) then we assing the start.next as then
                then we traverse till right-left ,we shift the nodes 

*/

//solution 2
//usin in place linked list algorithm
function reverseelinkedlist(head, left, right) {
  if (!head || left === right) {
    return head;
  }

  let dummynode = new Node(-1, head);
  let prev = dummynode;

  //finding the left
  for (let i = 1; i < left; i++) {
    prev = prev.next;
  }

  let start = prev.next;
  let then = start.next;

  for (let i = 0; i < right - left; i++) {
    start.next = then.next;
    then.next = prev.next;
    prev.next = then;
    then = start.next;
  }
  return dummynode.next;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//solution 1
function reverselist(head) {
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

function reverselist2(head, left, right) {
  if (!head || left === right) {
    return head;
  }

  let dummynode = new Node(-1);
  dummynode = head;
  let prev = dummynode;

  let count = 1;
  //u can use for loop also to traverse to find the left node
  while (count !== left) {
    prev = prev.neext;
    count++;
  }

  let start = prev.next;
  let end = start;

  //now find the right node
  while (left !== right) {
    end = end.next;
    left++;
  }

  let next = end.next;
  end.next = null;

  //call the recursion function
  let returnedhead = reverselist(start);

  //now connect them
  prev.next = returnedhead;
  start.next = next;

  return dummynode.next;
}
