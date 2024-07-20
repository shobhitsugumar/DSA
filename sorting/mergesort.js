let arr = [3, 6, 2, 1, 5];

function merge(arr, low, mid, high) {
  let left = low;
  let right = mid + 1;
  let temp = [];

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }
  for (let i = 0; i < temp.length; i++) {
    arr[low + i] = temp[i];
  }
}

function mergesort(arr, low, high) {
  if (low === high) {
    return;
  }

  let mid = Math.floor((low + high) / 2);
  mergesort(arr, low, mid);
  mergesort(arr, mid + 1, high);

  merge(arr, low, mid, high);
}

mergesort(arr, 0, arr.length - 1);

console.log(arr);
