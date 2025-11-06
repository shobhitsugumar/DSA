var isValid = function (s) {
  let obj = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let stack = [];

  for (let ch of s) {
    if (ch === "(" || ch === "{" || ch === "[") {
      stack.push(ch);
    } else {
      if (stack.length === 0 || stack[stack.length - 1] !== obj[ch]) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
};
