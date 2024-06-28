const arr = [6, 3, 5, 10, 9, 11];

function quicksort(arr) {
  let pivot = arr[0];

  let left = [];
  let right = [];

  if (arr.length <= 1) {
    return arr;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quicksort(left), pivot, ...quicksort(right)];
}

console.log(quicksort(arr));
