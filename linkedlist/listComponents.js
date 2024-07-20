//problem : https://leetcode.com/problems/linked-list-components/description/

/*solution 1. we can use set ,we can convert the nums into set and check if the node value is in the set ,
              we take a count and traverse the linked list and check if the node value is there in the set ,if it is there we see if the next value is also there in the set 
              if it is there we make the count as 1 if not we move to the next value if the value is there in the set but next value is not in the set we make the count to 1 again 
           2 solution 2 is also same to 1 but we dont use set instead we simply check in the array 


*/

// solution 1

//nums [0,2,3] list 0 > 1 > 2 > 3 > *
//output = 2

function listComponents(head, nums) {
  let current = head;
  let numset = new Set(nums);
  let count = 0;

  while (current !== null) {
    if (numset.has(current.value)) {
      if (current.next === null || !numset.has(current.next.value)) {
        count++;
      }
    }
    current = current.next;
  }
  return count;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//soluiton 2

function listComponents(head, nums) {
  let current = head;
  let count = 0;
  let countinous = false;
  while (current !== null) {
    if (nums.includes(current.val)) {
      if (!countinous) {
        count++;
        countinous = true;
      }
    } else {
      countinous = false;
    }
    current = current.next;
  }
}
