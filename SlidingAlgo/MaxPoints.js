/*
problem : 1423. Maximum Points You Can Obtain from Cards https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/description/

Input: cardPoints = [1,2,3,4,5,6,1], k = 3
Output: 12

Input: cardPoints = [9,7,7,9,7,7,9], k = 7
Output: 55
Explanation: You have to take all the cards. Your score is the sum of points of all card

solution : we use sliding window algo ,here we take lsum and rsum intialie we add all the lsum till k values then we reduce the lsum and take values from rsum 
           and  add to find the max sum 
*/

function Maxpoints(nums, k) {
  let lsum = 0;
  let rsum = 0;
  let maxsum = 0;

  //intialie we add lsum of k values
  for (let i = 0; i < k; i++) {
    lsum += nums[i];
  }
  maxsum = Math.max(maxsum, lsum);

  //now we reduce from the right side and add the left side
  let rightindex = nums.length - 1;
  for (let i = k - 1; i >= 0; i--) {
    lsum = lsum - nums[i];
    rsum = rsum + nums[rightindex];
    rightindex = rightindex - 1;

    maxsum = Math.max(maxsum, lsum + rsum);
  }
  return maxsum;
}

const res = Maxpoints([1, 2, 3, 4, 5, 6, 1], 3);

console.log(res);
