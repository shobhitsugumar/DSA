//here the size is fixed  k = 3 [1,2,4,3,5,6]
//time complexity : O(n)
function fixedsize(nums, k) {
  let maxsum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  maxsum = sum;

  for (let i = k; i < nums.length; i++) {
    sum = sum + nums[k] - nums[i - k];
    maxsum = Math.max(sum, maxsum);
  }
  return maxsum;
}
