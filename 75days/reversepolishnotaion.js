var evalRPN = function (tokens) {
  let stack = [];

  for (let ch of tokens) {
    if (ch === "*" || ch === "/" || ch === "-" || ch === "+") {
      let b = stack.pop();
      let a = stack.pop();
      let res;

      switch (ch) {
        case "+":
          res = a + b;
          break;
        case "-":
          res = a - b;
          break;
        case "*":
          res = a * b;
          break;
        case "/":
          res = Math.trunc(a / b);
          break;
      }
      stack.push(res);
    } else {
      stack.push(Number(ch));
    }
  }
  return stack[0];
};
