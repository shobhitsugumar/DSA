/**
 *1679. Max Number of K-Sum Pairs

 Example 1:

Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.


 solution  :   1) we can sort the array and we can use two pointer left and right 
                  if the sum is equal then count++ ,if sum is less than the k then we move the left ,if sum is greater than the k then we 
                  move the right -- 
                 Time Complexity : 
                        sorting : O(nlogn)
                        two pointer traversal :O(n)
                Space Complexity : O(1)
            
               2) we can use the hash map we cam store the difference between the k-sum and we check if its there in the map 
                 if its not present then we increase the value by 1 
                 if the map contains k - num  then we increase the count 1 then we decrease the freqeuncy of that value in the map 
 */

//solution 2

var maxOperations = function (nums, k) {
  //we use hash map to keep track of the k -nums

  let map = new Map();
  let count = 0;

  for (let num of nums) {
    let value = k - num;

    if (map.get(value) > 0) {
      count++;
      map.set(value, map.get(value) - 1);
    } else {
      map.set(num, (map.get(num) || 0) + 1);
    }
  }
  return count;
};
