/*

problem : container with most area of water 

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49

solution : optimal solution : is to use two pointer 


*/
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    let l = Math.min(height[left], height[right]);
    let w = right - left;

    let Area = l * w;
    max = Math.max(Area, max);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};
