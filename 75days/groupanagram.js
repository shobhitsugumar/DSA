var groupAnagrams = function (strs) {
  //hash map to store the value
  let map = new Map();

  for (let str of strs) {
    //sort the array
    let sortedstr = str.split("").sort().join("");

    if (!map.has(sortedstr)) {
      map.set(sortedstr, []);
    }
    map.get(sortedstr).push(str);
  }
  return Array.from(map.values());
};
