//problem merge two array without using extra space
/**
 Example 1:
Input:
 
n = 4, arr1[] = [1 4 8 10] 
m = 5, arr2[] = [2 3 9]

Output:
 
arr1[] = [1 2 3 4]
arr2[] = [8 9 10]


solution /optimal solution 1 : is to take left as last element of arr1 and right as first element of arr2 
                                then we compare if it is greater the we swap.then at last we sort both the array 
        optimal solution 2: is  to consider the both array as one then we use Gap .where we gap Math.ceil(n+m /2)
                            we take left as index of 0 and right we take as left + gap 
                            we run till the gap > 0 then inside we run the while loop (right<len)
                            we have three conditions 
                            * if left is there in the arr1 and right is in arr2 we compare and we swap 
                            * if left and right is in arr2 then we compare arr2[left-n] and arr2[right-n]
                            * if left and right are in arr1 then we compare arr1[left] and arr2[right]
 */

function mergetwoarrya(arr1, arr2) {
  let left = arr1.length - 1;
  let right = 0;
  while (left >= 0 && right < arr2.length) {
    if (arr1[left] > arr2[right]) {
      //swap
      let temp = arr1[left];
      arr1[left] = arr2[right];
      arr2[right] = temp;
      left--;
      right++;
    } else {
      break; // we are breaking here because if arr1 is less than arr2 then all befor that value will be less because both are sorted so we break here
    }
  }
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
}

//optimal solution 2

//swapping funtion
function swapifGreater(arr1, arr2, index1, index2) {}

function mergetwoarray2(arr1, arr2, n, m) {
  let length = n + m;
  let gap = Math.ceil(length / 2);
  while (gap > 0) {
    let left = 0;
    let right = left + gap;
    while (right < length) {
      //condition if left lies in arr1 and right lies in arr2
      if (left < n && right >= n) {
        swapifGreater(arr1, arr2, left, right - n);
      }
      //if left and right lies in arr2 here we dont want check for right because if left is in arr2 then right will also be in arr2
      else if (left >= n) {
        swapifGreater(arr1, arr2, left - n, right - n);
      } else {
        swapifGreater(arr1, arr2, left, right);
      }
      left++;
      right++;
    }
    if (gap === 1) {
      break;
    }
    gap = Math.ceil(gap / 2);
  }
}
