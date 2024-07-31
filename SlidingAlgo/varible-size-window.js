/*we can do this in three way 1.brute force solution
                              2.better solution ( for finding logest subarray)
                              3.optimized way solution (for finding longest length of the subarray)
                              
                              
*/

//better way :here we intialize l and r as 0 then we compare the sum to k if it is less we increase the "r"if it is greater we shrink the left
// [ 1,2,3,5,4,6] k=8
function slidingwindow(nums, k) {
  let l = 0;
  let r = 0;
  let maxlength = 0;
  let sum = 0;

  while (r < nums.length - 1) {
    sum += nums[r];
    while (sum > k) {
      sum = sum - nums[l];
      l = l + 1;
    }
    if (sum <= k) {
      maxlength = Math.max(maxlength, r - l + 1);
    }
    r = r + 1;
  }
  return maxlength;
}

/*optimezed way : incase we need to find the length of the subarray we use this one it is more optimized than that one
                  same as that one but we dont shrik totaly if the sum is greater than the k we skrik one one time 
                  instead of while we put if 

*/
function slidingwindow(nums, k) {
  let l = 0;
  let r = 0;
  let maxlength = 0;
  let sum = 0;

  while (r < nums.length - 1) {
    sum += nums[r];
    if (sum > k) {
      sum = sum - nums[l];
      l = l + 1;
    }
    if (sum <= k) {
      maxlength = Math.max(maxlength, r - l + 1);
    }
    r = r + 1;
  }
  return maxlength;
}
