//problem rotate the list : [1]>[2]>[3]>[4]>[5]>null k=2
// we need to rotate the node 2 times : [4]>[5]>[1]>[2]>[3]>null after two rotates

/*solution : steps 1. find the lenght and tail of the list 
                   2. if k is divisible by length we dont need to rotate the list we can return as it is 
                   3. point the last node to the head 
                   4. incase if the k is greater than the given length then we make it to smaller number a rotate it like 
                      eg if k = 13 we divide that by length = 5 so k=(k%length) => k = 13%5 = 3 we need to rotate 3 time only 
                   5. now we need to find the node which should point to null after rotation we do it by length(5) - 3 = 2 
                     so the node 2 should point to null and the next node should be head 

*/

///this function is used to find the node which should point to null
function findone(head, k) {
  let temp = head;
  let count = 1;

  while (temp !== null) {
    if (count === k) {
      return temp;
    }
    count++;
    temp = temp.next;
  }
  return head;
}

function rotatelist(head, k) {
  let tail = head;
  let length = 1;

  while (temp.next !== null) {
    length++;
    tail = tail.next;
  }
  if (k % length === 0) {
    return head;
  }
  k = k % length;

  nullnode = findone(head, length - k);

  head = nullnode.next;
  nullnode.next = null;

  return head;
}
//
