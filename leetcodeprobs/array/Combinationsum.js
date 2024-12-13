/*
39. Combination Sum

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

solution : is to do backtracking 
           the same candidate can be many times like 2 can be like 2 2 2 like that 
           
           So when to use BACKTRACKING (RECURSION) 
           When there are multiple options or choices to explore,
            backtracking becomes an effective approach because it systematically explores 
            each option and determines whether it leads to a valid solution.


            so the approach is to use the backtracking we sort the array because if the candidate is greater than the target then we 
            dont need to check the upcoming candidate 

            candidates = [2,3,6,7], target = 7
            Approach : 
              * we sort the array 
              * we create a empty array to store the final result 
              * create a function for recursion for backtracking 
              * here inside the result we need another array of combinations i.e [[2,2,3], [7]]
              * so what will be the approach we take the first candidate in the function we have remaining target , [] and empty array , start (which is i )
              * we take the 2 and check if the remaining target is === 0 if yes we push it into the main result array and we return 
              * so if not we go into the for loop where i will be start which will be 0 then inside we check if (candidate[i] > remaingtarget ) ie( 2 >7 )intialie
              * if yes we break if no we push it inside the empty [] then again we call the function now with the remaing target as [7-2 ] which will be  5
              * and the start point as i 
              * now  again we will take 2 as and reaming target as 5 the we check if it is greater
              * like wise it will go at one point the remaning target will become 1 and the candidate wil be greater than remaining target 2> 1 then we will break 
              * then till go to the previos called function then we will pop out the last candidate in the array and the i will get increamented
*/
var combinationSum = function (candidates, target) {
  let result = [];
  const backtrack = (remainingtarget, currentcombo, start) => {
    if (remainingtarget === 0) {
      result.push([...currentcombo]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      const candidate = candidates[i];

      if (candidate > remainingtarget) {
        break;
      }
      currentcombo.push(candidate);

      backtrack(remainingtarget - candidate, currentcombo, i);
      currentcombo.pop();
    }
  };
  candidates.sort((a, b) => a - b);
  backtrack(target, [], 0);

  return result;
};
