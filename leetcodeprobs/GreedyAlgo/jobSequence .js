//problem :Job Sequencing Problem https://www.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1

/*

Input: Jobs = [[1,4,20],[2,1,1],[3,1,40],[4,1,30]]
Output: 2 60
Explanation: Job1 and Job3 can be done with maximum profit of 60 (20+40).



Input: Jobs = [[1,2,100],[2,1,19],[3,2,27],[4,1,25],[5,1,15]]
Output: 2 127
Explanation: 2 jobs can be done with maximum profit of 127 (100+27).


solution : sort the array in descending order accoring to the profit 
           then find the maxi deadline so that we can create a array of length (maxi +1) and fill the array with -1 
           then in the new array fill it with the deadline value eg if the deadline is 4 fill the result array index 4 as 4 
           incase if the 4 is already filled then fill the 4-1 =3 rd index 
           increaese the count and sum the jobprofit as well 
           at last return the count and jobprofit


           Time Complexity: O(N log N) + O(N*M).
           O(N log N ) for sorting the jobs in decreasing order of profit. O(N*M) since we are iterating through all N jobs and for every job we are checking from the last deadline, say M deadlines in the worst case.
           
           Space Complexity: O(M) for an array that keeps track of which day job is performed if M is the maximum deadline available.
*/

/*
/*
class Job{
    constructor(id, dead, profit){
        this.id = id;
        this.deadline = dead;
        this.profit = profit;
    }
}
 */

function jobsequence(arr) {
  //sort the  array accoriding to the profit in descending
  arr.sort((a, b) => b.profit - a.profit);

  //find the maxi deadline so that we can create a array of size maxi+1
  let maxi = 0;
  for (let i = 0; i < arr.length; i++) {
    maxi = arr[i].deadline;
  }

  let result = new Array(maxi + 1).fill(-1);

  let countjobs = 0;
  let jobprofit = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i].deadline; j > 0; j--) {
      if (result[j] === -1) {
        result[j] = i;

        countjobs++;
        jobprofit += arr[i].profit;
        break;
      }
    }
  }

  return [countjobs, jobprofit];
}
