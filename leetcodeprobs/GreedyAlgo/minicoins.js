/*
problem : Input: coins[] = {25, 10, 5}, sum = 30
Output: 2
Explanation : Minimum 2 coins needed, 25 and 5  


Input: coins[] = {9, 6, 5, 1}, sum = 19
Output: 3
Explanation: 19 = 9 + 9 + 1


*/

function findMinimumCoins(V) {
  let coins = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
  let ans = [];
  let n = coins.length;

  for (let i = n - 1; i >= 0; i--) {
    while (V >= coins[i]) {
      V -= coins[i];
      ans.push(coins[i]);
    }
  }
}
s;
