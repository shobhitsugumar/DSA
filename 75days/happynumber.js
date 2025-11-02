var isHappy = function (n) {
  let set = new Set();

  while (n !== 1 && !set.has(n)) {
    set.add(n);
    n = getnext(n);
  }
  return n === 1;

  function getnext(n) {
    let total = 0;
    while (n > 0) {
      let dig = n % 10;
      total = total + dig * dig;
      n = Math.floor(n / 10);
    }
    return total;
  }
};
