/*
problem : 904. Fruit Into Baskets :https://leetcode.com/problems/fruit-into-baskets/description/

Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees.
Example 2:

Input: fruits = [0,1,2,2]
Output: 3
Explanation: We can pick from trees [1,2,2].
If we had started at the first tree, we would only pick from trees [0,1].

solution : Better solution :  we can solve this one using two pointer and sliding window 
                              we need hash map to keep track of how many numbers are there 
                              Here we shrink the left till the map size is less or equal to 2 
                              Time Complexity : O(2n)
     
           Optimized solution :This is also same but the difference is here we  dont shrink the left completely 
                               instead we shrink left by 1 and we maintain the maxlen size and we traverse 
                               Time Complexity : O(n)


*/

///Better solution

function Fruitbasket(n) {
  let left = 0;
  let right = 0;
  let maxlen = 0;
  let map = new Map();

  while (right < n.length) {
    map.set(n[right], (map.get(n[right]) || 0) + 1);

    while (map.size > 2) {
      map.set(n[left], map.get(n[left]) - 1);
      if (map.get(n[left]) === 0) {
        map.delete(n[left]);
      }
      left++;
    }
    if (map.size <= 2) {
      maxlen = Math.max(maxlen, right - left + 1);
    }
    right++;
  }
  return maxlen;
}

//optimized solution

function Fruitbasket(n) {
  let left = 0;
  let right = 0;
  let maxlen = 0;
  let map = new Map();

  while (right < n.length) {
    map.set(n[right], (map.get(n[right]) || 0) + 1);

    if (map.size > 2) {
      map.set(n[left], map.get(n[left]) - 1);
      if (map.get(n[left]) === 0) {
        map.delete(n[left]);
      }
      left++;
    }
    if (map.size <= 2) {
      maxlen = Math.max(maxlen, right - left + 1);
    }
    right++;
  }
}
