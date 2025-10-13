var intToRoman = function (nums) {
  let result = "";
  let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  for (let i = 0; i < values.length; i++) {
    while (nums >= values[i]) {
      nums = nums - values[i];
      result = result + symbols[i];
    }
  }
  return result;
};
