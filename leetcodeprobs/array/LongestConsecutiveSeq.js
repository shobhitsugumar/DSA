/*

128. Longest Consecutive Sequence :https://leetcode.com/problems/longest-consecutive-sequence/description/
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

solution : Brute Force : here we take the first element add +1 to it and check in the array wheter that element+1 is there if ther then we 
                         increase the count to 1 and again we check 
                        Time Complexity : O(n^2)

            Better solution : is to first sort the array then we keep track of the lastelement 
                        Time Complexity : O (n) + and for sorting O(nlogn)

            Optimal Solution : is to use set we put all the element in the set then we traverse in the set
                               the element for eg is 4 we check if 4 -1=3 is there in the set then we go to next element 
                               if for eg if the element is 1 so 1-1=0 is not there in the set then we start counting it 


 */

//brute force

//linear search to find the element present or not

function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
}

function LongestConsecutive(arr) {
  let longest = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i];
    count = 1;
    //we do linear search to check wheater x+1 is there in the arr
    while (linearSearch(arr, x + 1) === true) {
      x += 1;
      count++;
    }
    length = Math.max(length, count);
  }
  return length;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Better Solution
function LongestConsecutive(arr) {
  //sort the arr
  let sortarr = arr.sort((a, b) => a - b);
  console.log(sortarr);
  let lastelement = Number.MIN_SAFE_INTEGER;
  let longest = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (sortarr[i] - 1 === lastelement) {
      count++;
      lastelement = sortarr[i];
    } else if (sortarr[i] !== lastelement) {
      lastelement = sortarr[i];
      count = 1;
    }
    longest = Math.max(longest, count);
  }
  return longest;
}

//////////////////////////////////////////////////////////////////////////////////////////////
//optimal soluiton

function LongestConsecutive(arr) {
  let set = new Set(arr);
  let count = 0;
  let length = 0;

  for (let value of set) {
    //here for eg if we take 1 1-1=0 there is no 0 in the set so we go into the loop
    //we set the current value as 1 and count as 1
    if (!set.has(value - 1)) {
      let currentvalue = value;
      count = 1;
      // now we start to check if 1+1 = 2 is there in the set
      //if its there we change the current value as 2 and count++
      while (set.has(currentvalue + 1)) {
        currentvalue += 1;
        count++;
      }
      length = Math.max(length, count);
    }
  }
  return length;
}
