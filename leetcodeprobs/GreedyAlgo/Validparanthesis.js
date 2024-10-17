/*
problem :678. Valid Parenthesis String  https://leetcode.com/problems/valid-parenthesis-string/description/

solution : is to keep track of the range we keep min and max 
           if there is opening bracket then +1 
           if there is closing bracket then -1
           if there is * then there is a range -1 0 1 
           -1  we negelate 

*/

function validparathesis(s) {
  let min = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      min += 1;
      max += 1;
    } else if (s[i] === ")") {
      min -= 1;
      max -= 1;
    }
    //for *
    else {
      min -= 1;
      max += 1;
    }
    //if min is - 1
    if (min < 0) {
      min = 0;
    }
    //the max should be positive number i.e  [0,1] if cant be [-1,-1] then it is false
    if (max < 0) {
      return false;
    }
  }
  return min === 0;
}
