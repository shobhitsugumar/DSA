var isIsomorphic = function (s, t) {
  let maps = new Map();
  let mapt = new Map();

  for (let i = 0; i < s.length; i++) {
    let ch1 = s[i];
    let ch2 = t[i];

    if (
      (maps.has(ch1) && maps.get(ch1) !== ch2) ||
      (mapt.has(ch2) && mapt.get(ch2) !== ch1)
    ) {
      return false;
    }

    maps.set(ch1, ch2);
    mapt.set(ch2, ch1);
  }

  return true;
};
