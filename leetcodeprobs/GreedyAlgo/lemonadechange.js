/**
 problem : https://leetcode.com/problems/lemonade-change/description/

 860. Lemonade Change

 Input: bills = [5,5,5,10,20]
Output: true

Input: bills = [5,5,10,10,20]
Output: false
 */

function lemonadechange(arr) {
  let five = 0;
  let ten = 0;

  for (let i = 0; i < arr.lengthl; i++) {
    if (arr[i] === 5) {
      five++;
    } else if (arr[i] === 10) {
      //check if we have 5 dollar bill
      if (five) {
        five--;
        ten++;
      } else {
        return false;
      }
    }
    //if the note is 20 dollar
    else {
      //check if we have 5 10 dollar bill
      if (five && ten) {
        five--;
        ten--;
      }
      //incase if we dont have 10 dollar bill check if we have three 5 dollar bill
      else if (five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
    return true;
  }
}
