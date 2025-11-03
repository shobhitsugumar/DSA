var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let arr = [];
  arr = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let last = arr[arr.length - 1];
    let cur = intervals[i];

    if (last[1] >= cur[0]) {
      last[1] = Math.max(last[1], cur[1]);
    } else {
      arr.push(intervals[i]);
    }
  }
  return arr;
};
