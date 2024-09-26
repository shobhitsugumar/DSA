/**
 problem :

 Input: n = 3, w = 50, value[] = [60,100,120], weight[] = [10,20,30]
Output: 240.000000
Explanation: Take the item with value 60 and weight 10, value 100 and weight 20 and split the third item with value 120 and weight 30,
 to fit it into weight 20. so it becomes (120/30)*20=80, so the total value becomes 60+100+80.0=240.0 
 Thus, total maximum value of item we can have is 240.00 from the given capacity of sack. 
 */

class Item {
  constructor(value, weight) {
    this.value = value;
    this.weight = weight;
  }
}

function knapsack(arr, W) {
  //sort the array in descending in higher order to know the higher order we do value/weight

  arr.sort((a, b) => b.value / b.weight - a.value / a.weight);

  let currentweight = 0;
  let finalvalue = 0;

  for (let i = 0; i < arr.length; i++) {
    if (currentweight + arr[i].value <= W) {
      currentweight += arr[i].weight;
      finalvalue += arr[i].value;
    } else {
      // we take only the fract portion of  that one
      let remain = W - currentweight;
      finalvalue += (arr[i].value / arr[i].weight) * remain;
      break;
    }
  }
  return finalvalue;
}

let items = [
  new Item(60, 10), // value: 60, weight: 10
  new Item(100, 20), // value: 100, weight: 20
  new Item(120, 30), // value: 120, weight: 30
];

let capacity = 50; // Maximum weight capacity of the knapsack

let maxValue = knapsack(items, capacity);
