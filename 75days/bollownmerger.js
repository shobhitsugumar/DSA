//452. Minimum Number of Arrows to Burst Balloons

var findMinArrowShots = function (points) {
  points.sort((a, b) => a[1] - b[1]);
  let currentarrow = points[0][1];
  let arrowcount = 1;

  for (let i = 1; i < points.length; i++) {
    if ([points[i][0]] <= currentarrow) {
      continue;
    }
    arrowcount++;
    currentarrow = points[i][1];
  }

  return arrowcount;
};
