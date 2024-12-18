//problem :https://leetcode.com/problems/group-anagrams/description/

/*


Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]


solution :1) is to sort the str one by one and put the sorted  str in the map . the map value contains array of original str value 
          2) need to type


*/

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
