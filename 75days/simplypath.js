var simplifyPath = function (path) {
  let stack = [];
  let components = path.split("/");

  // if the component is empty or . we skip
  for (let component of components) {
    if (component === "" || component === ".") {
      continue;
    } else if (component === "..") {
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push(component);
    }
  }
  let resultstr = "";
  for (let str of stack) {
    resultstr += "/" + str;
  }
  return resultstr.length === 0 ? "/" : resultstr;
};
