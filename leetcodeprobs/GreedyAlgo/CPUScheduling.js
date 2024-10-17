//problem

/*
Input:jobs = [3, 1, 4, 2, 5]
                
Output: 4
Explanation: 
                sort the array [ 1,2,3,4,5]
The first job that will be executed is of duration 1 and the waiting time for it will be 0.
After the first job, the next shortest job with a duration of 2 will be executed with a waiting time of 1.
Following the completion of the first two jobs, the next shortest job with a duration of 3 will be executed with a waiting time of 3 (1 + 2).
Then, the job with a duration of 4 will be executed with a waiting time of 6 (1 + 2 + 3).
Finally, the job with the longest duration of 5 will be executed with a waiting time of 10 (1 + 2 + 3 + 4).

*/

function shortestJobFirst(jobs) {
  // Sort the jobs in ascending order
  jobs.sort((a, b) => a - b);

  // Initialize total waiting time
  let waitTime = 0;
  // Initialize total time taken
  let totalTime = 0;
  // Get the number of jobs
  const n = jobs.length;

  // Iterate through each job
  // to calculate waiting time
  for (let i = 0; i < n; ++i) {
    // Add current total
    // time to waiting time
    waitTime += totalTime;

    // Add current job's
    // time to total time
    totalTime += jobs[i];
  }

  // Return the average waiting time
  return waitTime / n;
}

const jobs = [4, 3, 7, 1, 2];
