/*
problem : https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


solution : using the two pointer and sliding window . 
           we can use map or set 

*/

//using hashmap

function longestSubString(str) {
  let hashmap = new Map();
  let left = 0;
  let right = 0;
  let maxsub = 0;

  while (right < str.length) {
    if (hashmap.has(str[right])) {
      //if the value is present
      left = Math.max(hashmap.get(str[right]) + 1, left);

      /*
      the above code is like this

      if (hashmap[str[right]] >= left) {
      left = hashmap[str[right]] + 1;
      }
}     */
    }
    hashmap.set(str[right], right); //we save the value and the index in the map
    maxsub = Math.max(maxsub, right - left + 1);
    right++;
  }
  return maxsub;
}
///////////////////////////////////////////////////////////////////////////////////////////////

//using set

function longestSubStr(s) {
  let set = new Set();
  let left = 0;
  let right = 0;
  let maxsum = 0;

  while (right < s.length) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxsum = Math.max(maxsum, right - left + 1);
  }
  return maxsum;
}
