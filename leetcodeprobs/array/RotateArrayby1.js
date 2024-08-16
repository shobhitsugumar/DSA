//rotate array by 1
// arr= [1,2,3,4,5] => output = > [2,3,4,5,1]

function rotate(arr) {
  let temp = arr[0]; //to store the first value
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = temp;
  console.log(arr);
}
rotate([1, 2, 3, 4, 5]);
