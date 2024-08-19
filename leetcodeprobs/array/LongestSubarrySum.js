//Longest sub-array having sum k
/*
Input: arr[] = { 10, 5, 2, 7, 1, 9 }, k = 15
Output: 4
*/

//solution : we can use hash map and sliding window and cumulative sum(prefixsum) this we use for negative number

function longestSubsum(arr, k) {
  let map = new Map();
  let cummulativesum = 0;
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    cummulativesum += arr[i];

    if (cummulativesum === k) {
      max = i + 1;
    }

    if (map.has(cummulativesum - k)) {
      max = Math.max(max, i - map.get(cummulativesum - k));
    }

    if (!map.has(cummulativesum)) {
      map.set(cummulativesum, i);
    }
  }
  return max;
}

const res = longestSubsum([10, 5, 2, 7, 1, 9], 15);

console.log(res);

//solution for positive and conating zero we use sliding window normal

let left = 0;
let right = 0;
let sum = a[0];
while (right < arr.length) {
  //if the sum exceeds the k
  while (left <= right && sum > k) {
    {
      sum -= arr[i];
      left++;
    }
    if (sum === k) {
      maxlen = Math.max(maxlen, right - left + 1);
    }
    right++;

    //in case if the right is the last element
    if (right < n) sum += a[right];
  }
}
