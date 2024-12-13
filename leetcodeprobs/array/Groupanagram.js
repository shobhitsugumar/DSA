/*


49. Group Anagrams

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

solution : is to sort each word and put store them in the map with the element and return it 

*/

function anagram(arr) {
  const map = new Map();

  for (let str of arr) {
    const sortedstr = str.slice("").sort().join("");

    if (!map.has(sortedstr)) {
      map.set(sortedstr, []);
    }

    map.get(sortedstr).push(str);
  }
  return Array.from(map.values);
}

console.log(anagram(["eat", "tea", "tan", "ate", "nat", "bat"]));
