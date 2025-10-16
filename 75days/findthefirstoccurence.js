var strStr = function (haystack, needle) {
  let j = 0;
  let i = 0;
  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      j++;
      i++;

      if (j === needle.length) {
        return i - j;
      }
    } else {
      i = i - j + 1;
      j = 0;
    }
  }

  return -1;
};
