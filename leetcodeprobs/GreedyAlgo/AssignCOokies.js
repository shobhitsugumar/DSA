/**
 problem :  https://leetcode.com/problems/assign-cookies/description/

 455. Assign Cookies

 solution : we sort both the array and we just compare 
 */

function AssignCookies(children, cookie) {
  let n = children.length;
  let m = cookie.length;

  let l = 0;
  let r = 0;

  children.sort((a, b) => a - b);
  cookie.sort((a, b) => a - b);
  while (l < n && r && m) {
    if (children[l] <= cookie[r]) {
      r++;
    }
    l++;
  }
  return r;
}
