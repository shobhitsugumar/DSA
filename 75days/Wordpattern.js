var wordPattern = function (pattern, s) {
  let arr = s.split(" ");
  if (pattern.length !== arr.length) return false;

  let map1 = new Map(); //
  let map2 = new Map(); //

  for (let i = 0; i < pattern.length; i++) {
    let ch = pattern[i];
    let word = arr[i];

    if (
      (map1.has(ch) && map1.get(ch) !== word) ||
      (map2.has(word) && map2.get(word) !== ch)
    ) {
      return false;
    }

    map1.set(ch, word);
    map2.set(word, ch);
  }
  return true;
};
