/*
problem : 169. Majority Element https://leetcode.com/problems/majority-element/description/

Input: nums = [2,2,1,1,1,2,2]
Output: 2

solution : better solution : we can use hashing to store the elements track its frequency and we can loop the map to see 
                             which has more frequency and return that one 
                             Time Complexity : O(n)
                             Space Complexity : O(u) ( u si unique if the array has all uniqe elements )
           
           optimal solution : using Moores alogirthm 
                              we apply moores algo and then we verify is that is majority element 
                              TIme Complexity : O(n)
                              Space Complexity : O(1)
*/

//better solution :

function Maj(arr) {
  let map = new Map();
  let maxcount = 0;
  let maxElement = null;

  for (let i = 0; i < arr.length; i++) {
    let count = (map.get(arr[i]) || 0) + 1;
    map.set(arr[i], count);

    //if the count is max we set the maxcount to the count and the maxelemet to that element
    if (count > maxcount) {
      maxcount = count;
      maxElement = arr[i];
    }
  }
  return maxElement;
}

//optimal solution : using Moores algo

function MaxEle(arr) {
  let count = 0;
  let ele;

  //Moores algo
  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      ele = arr[i];
      count = 1;
    } else if (arr[i] === el) {
      count++;
    } else {
      count--;
    }
    /// we can write the else if and else as like below one also
    //count += (arr[i]===ele)? +1 : -1
  }

  //verifying if maj element (this we do if we are not sure if the arr surely contains maj element eg [1,2,3,4,5] this they dont have maj element so we check )
  let count2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      count2++;
    }
  }
  if (count2 > Math.floor(arr.length / 2)) {
    return ele;
  }
  return -1;
}
