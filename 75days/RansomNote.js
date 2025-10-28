var canConstruct = function (ransomNote, magazine) {
  let count = new Map();

  for (let ch of magazine) {
    count.set(ch, (count.get(ch) || 0) + 1);
  }

  for (let ch of ransomNote) {
    if (!count.has(ch) || count.get(ch) === 0) {
      return false;
    }
    count.set(ch, count.get(ch) - 1);
  }
  return true;
};
