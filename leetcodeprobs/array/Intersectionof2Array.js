/*problem : Intersection of Two Arrays :https://leetcode.com/problems/intersection-of-two-arrays/description/

solution : bruteforce : we take a array called visited array and we take a result array to store the result 
                        the array size can be of arrya of A or B
                        

 */

//Brute force

function intersection(arr1, arr2) {
  visitedarr = new Array(arr2.length).fill(0);
  result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && visitedarr[j] === 0) {
        result.push(arr1[i]);
        visitedarr[j] = 1;
        break;
      }
      if (arr2[j] > arr1[i]) break;
    }
  }
  return result;
}

//another method betterway

function intersection(arr1, arr2) {
  let set = new Set();
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      set.add(arr2[i]);
    }
  }
  return [...set];
}

//optimized way

function intersection(arr1, arr2) {
  let i = 0;
  let j = 0;
  let ans = [];

  while (i < arrr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr1[i]) {
      j++;
    } else {
      ans.push(arr1[i]);
      i++;
      j++;
    }
  }
  return ans;
}
