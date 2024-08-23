/*problem :Input: arr[] = {16, 17, 4, 3, 5, 2}
Output: 17 5 2

solution : brute force : we iterate from start and we compare with j = i+1 we keep a flag
           TimeComplexity:O(n^2)
           space Complexity : O(n)

           Optimial solution : is to traverse from back ,we keep track of max element then we check with the max if it is greater then we change the max to current one 
           Timecomplexity : if we return in any order then O(n)
                            if we need to return in sorted order O(n)+O(nlogn)


*/
//brute force

function leader(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    let leader = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        leader = false;
        break;
      }
    }
    if (leader === true) {
      newarr.push(arr[i]);
    }
  }
}

//optimal solution

function leader(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let newarr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > max) {
      newarr.push(arr[i]);
      max = Math.max(max, arr[i]);
    }
  }
  return newarr;
}
