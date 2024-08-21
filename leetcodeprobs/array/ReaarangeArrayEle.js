/*
problem : 2149. Rearrange Array Elements by Sign:  https://leetcode.com/problems/rearrange-array-elements-by-sign/description/

Input: nums = [3,1,-2,-5,2,-4]
Output: [3,-2,1,-5,2,-4]

solution :brute soltuion : is to take a seperate pos and neg array and store the val and we again loop till the half size of the array 
                           then add the element in it 
          optimal solution :is to use a pos and neg index and increment them by 2 
          Time Complexityt:O(n)
          Space Complexity:O(1)


*/

//optimal solution
function RearrangeEle(arr) {
  let posindex = 0;
  let negindex = 1;
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      res[posindex] = arr[i];
      posindex += 2;
    } else {
      res[negindex] = arr[i];
      negindex += 2;
    }
  }
  return res;
}

/*
incase if the positive and negative are not equal in the array i.e [3,2,-4,-5,1,8] 
positive =[3,2,1,8] negative = [-4,-5]

Tc = O(2n)
sc=O(n)

we use the brute force method 
 */

function RearrangeEle(arr) {
  let pos = [];
  let neg = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos.push(arr[i]);
    } else {
      neg.push(arr[i]);
    }
  }

  //now checking if pos value is greater in array or negative value

  //if pos value is greater than neg
  if (pos.length > neg.length) {
    for (let i = 0; i < neg.length; i++) {
      arr[i * 2] = pos[i];
      arr[i * 2 + 1] = neg[i];
    }
    let index = neg.length * 2; //now we enter the left over pos value into the array

    for (let i = neg.length; i < pos.length; i++) {
      arr[index] = pos[i];
      index++;
    }
  }
  //if neg arry had  greter ele than pos
  else {
    for (let i = 0; i < pos.length; i++) {
      arr[i * 2] = pos[i];
      arr[i * 2 + 1] = neg[i];
    }
    let index = pos.length * 2;
    for (let i = pos.length; i < neg.length; i++) {
      arr[index] = neg[i];
      index++;
    }
  }
  return arr;
}
