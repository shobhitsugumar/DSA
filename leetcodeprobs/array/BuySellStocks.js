/*
problem : 121. Best Time to Buy and Sell Stock :https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
*/

function BuySellStock(arr) {
  let min = arr[0];
  let cost = 0;
  let profit = 0;

  for (let i = 0; i < arr.length; i++) {
    cost = arr[i] - min;
    profit = Math.max(profit, cost);
    min = Math.min(min, arr[i]);
  }
  return profit;
}
