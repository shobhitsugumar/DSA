//problem :sum the nested array [3,2,[4,[5],6],"7",8] ,sum only the integeres

function nestedsum(arr) {
  let sum = 0;

  for (let item of arr) {
    if (Array.isArray(item)) {
      sum += nestedsum(item);
    } else if (typeof item === "number") {
      sum += item;
    }
  }
  return sum;
}

let res = nestedsum([3, 2, [4, [5], 6], "7", 8]);
console.log(res);
