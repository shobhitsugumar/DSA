var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let map = new Map();

  for (let ch of s) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }

  for (let ch2 of t) {
    if (!map.has(ch2)) return false;

    map.set(ch2, map.get(ch2) - 1);
    if (map.get(ch2) === 0) map.delete(ch2);
  }

  return map.size === 0;
};
