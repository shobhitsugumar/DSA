//arr[ 1,2,4,7,7,5]

function secondlargest(arr) {
  let largest = arr[0];
  let secondlargest = -Infinity;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondlargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondlargest) {
      secondlargest = arr[i];
    }
  }
  return secondlargest;
}

const res = secondlargest([3, 2, 1, 4, 7, 7, 5]);
console.log(res);

//second smallest

function secondSmallest(arr) {
  let smallest = arr[0];
  let secnodsmallest = Infinity;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < secnodsmallest) {
      secnodsmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] !== smallest && arr[i] < secnodsmallest) {
      secnodsmallest = arr[i];
    }
  }
  return secnodsmallest;
}

const res = secondSmallest([3, 2, 1, 4, 7, 7, 5]);
console.log(res);
