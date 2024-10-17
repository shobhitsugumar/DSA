/**
 45. Jump Game II

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.


solution : the method is to use range we keep range left and right 

           and we keep fetchfurthest as i + arr[i]

            
 */

//in js 
function jump2(arr) {
  let jump = 0;
  let right = 0;
  let left = 0;

  while (r < arr.length - 1) {
    farthest = 0;
    for (let i = left; i <= right; i++) {
      farthest = Math.max(i + arr[i], farthest);
    }
    left = right + 1;
    right = farthest;
    jump++;
  }
  return jump;
}
///////////////////////////////////////////////////////
//in java

public class jumpgame{
  public static int jumpgame2(int[] arr){
    int jump = 0;
    int right =0;
    int left =0;
    while(right < arr.length-1){
      int farthest =0;
      for(int i =left ;i<=right;i++){
        farthest = Math.max(i+arr[i],farthest);
      }
      left = right+1;
      right = farthest;
      jump++;


    }
    return jump;
  }
  public static void main(String[] args){
    int[] arr = {2, 3, 1, 1, 4};
    int ans = jumpgame.jumpgame2(arr);  // Call the method
    System.out.println(ans); 
  }
    
}