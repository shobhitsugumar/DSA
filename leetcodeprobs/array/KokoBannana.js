/**
 * 875. Koko Eating Bananas  https://leetcode.com/problems/koko-eating-bananas/description/?envType=study-plan-v2&envId=leetcode-75
 *
 * Input: piles = [3,6,7,11], h = 8
   Output: 4


   Koko wants to finish all the bananas within h hours.
   You need to find the minimum speed k that allows Koko to eat all the bananas in time.

   so from the above eg 
   [ 3 ,6,7,11] h =8
    
   * if we eat 2 bananas then
     for 3 first hour we eat 2 and we left with 1 again we take another hour to eat that 1 banana = 2 hours
     for 6 we take total 3 if we eat 2 banana in one hour
     for 7 ew take 4 hours so for 6 we took like 3 hour and we our left out with 1 banana so we take another hour to eat that = 4
     for 11 we take 6 
     so total hours = 2+2+4+6 = 12 so its greater than the 8 hours

     so we move to next speed like 3 we keep on going ountil we find if k <= h then we return that as ans


     solution  : brute force : first we need to find the k element we can go from 1 to the max size of the piles 
                               so from 1 we go we do 1 for every pile in the array we find the total hour
                               then we compare it 
                               if its greater then we move to next number 2 like wise we keep on goind 
                               Time Complexity : O(max of the piles) * O(n)[for finding the total hours]

                optimal solution : is to use binary search 
                                   instead of moving one by one like 1 2 3 
                                   we know the range is from 1 to max size of the pile
                                   so we take the mid and do the total hour then check if its greater than the h 
                                   if yes we move the right to mid -1 
                                   if no we move the left to mid+1 
                              

 */
//solution

var minEatingSpeed = function (piles, h) {
  function canfinish(piles, k) {
    let totalhours = 0;

    for (let i = 0; i < piles.length; i++) {
      totalhours += Math.ceil(piles[i] / k);
    }

    return totalhours;
  }

  let ans = 0;
  let low = 1;
  let high = Math.max(...piles);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (canfinish(piles, mid) <= h) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
};
