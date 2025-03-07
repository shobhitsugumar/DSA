//443. String Compression

var compress = function (chars) {
  let write = 0;
  let count = 1;

  for (let i = 0; i < chars.length; i++) {
    if (i < chars.length - 1 && chars[i] === chars[i + 1]) {
      count++;
    } else {
      chars[write++] = chars[i];

      if (count > 1) {
        for (let digit of count.toString()) {
          chars[write++] = digit;
        }
      }
      count = 1;
    }
  }
  return write;
};
