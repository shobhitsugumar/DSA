/**
 problem : https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/

 Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]

 solution :is to use two pointer  one is current and aother one is used to change the number in that position 
            here we skip first two number because the first two will always be true 
            so we start current  and index at 2 we check the current value with the value [index -2 ] 
            why we do -2 is if we take 1 1 1 the first two elements are true now we are in the third index if we check with the first one 
            if its true then the value is repeating 

 */

function removeduplicate(arr) {
  let index = 2;

  for (let current = 2; current < arr.length; current) {
    //we check if the current is not equal to the index -2 we move the index and the i
    // if its equal then we move only the current because we need the index to be there so if the next value which is not equal
    // we put that value in the index
    if (arr[current] !== arr[index - 2]) {
      // if its not same then we put the value in the index
      arr[index] = arr[current];
      index++;
    }
  }
  return index;
}
