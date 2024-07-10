//problem https://leetcode.com/problems/intersection-of-two-linked-lists/description/

//solution 1) we can use hash map we can store the head1 value in the map and we can check if head2 is there in map
//solution 2) is to find the length of both the t1 and t2 then find the differene and then move the t1 or t2 to differnce step and start comparing
//solution 3) is to traverse both simultaneously then if one reaches the null assign it to the opposite head then again traverse once both are equal return

//solution 3

function intersection(head1, head2) {
  let temp1 = head1;
  let temp2 = head2;

  if (head1 === null || head2 === null) {
    return null;
  }

  while (temp1 !== temp2) {
    temp1 = temp1.next;
    temp2 = temp2.next;
    if (temp1 === temp2) {
      return temp1; //can return any temp1 or temp2 either that will be intersection or it will be null if no list are linked
    }

    if (temp1 === null) {
      temp1 = head2;
    }
    if (temp2 === null) {
      temp2 = head1;
    }
  }
}
