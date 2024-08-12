//Count distinct elements in every window of size k : https://www.geeksforgeeks.org/count-distinct-elements-in-every-window-of-size-k/
/*Input: arr[] = {1, 2, 1, 3, 4, 2, 3}, K = 4
Output: 3 4 4 3
Explanation: First window is {1, 2, 1, 3}, count of distinct numbers is 3
                      Second window is {2, 1, 3, 4} count of distinct numbers is 4
                      Third window is {1, 3, 4, 2} count of distinct numbers is 4
                      Fourth window is {3, 4, 2, 3} count of distinct numbers is 3
                      
*/

//solution

function distinctelements(arr, k) {
  let right = 0;
  let map = new Map();
  let res = [];
  let countfreq = 0;

  while (right < arr.length) {
    map.set(arr[right], (map.get(arr[right]) || 0) + 1);

    if (map.get(arr[right]) === 1) {
      countfreq++;
    }

    if (right >= k - 1) {
      res.push(countfreq);

      let removeelement = arr[right - k + 1];
      map.set(removeelement, map.get(removeelement) - 1);
      if (map.get(removeelement) === 0) {
        countfreq--;
        map.delete(removeelement);
      }
    }
    right++;
  }
  return res;
}

const res = distinctelements([1, 2, 1, 3, 4, 2, 3], 4);

console.log(res);
