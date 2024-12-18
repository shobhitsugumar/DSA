/*

problem split path https://leetcode.com/problems/simplify-path/description/


The rules of a Unix-style file system are as follows:

A single period '.' represents the current directory.
A double period '..' represents the previous/parent directory.
Multiple consecutive slashes such as '//' and '///' are treated as a single slash '/'.
Any sequence of periods that does not match the rules above should be treated as a valid directory or file name. 
For example, '...' and '....' are valid directory or file names.

Input: path = "/.../a/../b/c/../d/./"

Output: "/.../b/d"


solution : we can use stack to remove and add elements 
*/

function splitpath(path) {
  let stack = [];

  //we will split the path
  const components = path.split("/");

  for (let component of components) {
    //first conditions if it empty then we skip ,if its . we skip because it points to the same directory
    if (component === "" || component === ".") {
      continue;
    } else if (component === "..") {
      //if the component is equal to ... then we pop from the stack because ... represents previous directory
      //it the stack is empty we dont need to pop
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push(component); //we  push other items into the stack
    }
  }

  //we take al the item from stack and before every thing we add /
  let resultstr = "";
  for (let str of stack) {
    resultstr += "/" + str;
  }

  return resultstr.length === 0 ? "/" : resultstr;
}

console.log(splitpath("/.../a/../b/c/../d/./"));
