var convert = function (s, numRows) {
  //base case
  if (numRows === 1) return s;

  //let create a row array containing the min size of s or numRows and we will it with "" so it will be like ["" ,"" ,""]

  let row = new Array(Math.min(numRows, s.length)).fill("");

  //let have a currentrow so that we can keep track which row its pointing now
  let currentrow = 0;

  //let have going down varibale , if the current row reaches the last row or the first row we will swap the going down varible
  //this is to move the currentrow up and down
  let goingdown = false; //intialie we set this to false

  for (let c of s) {
    row[currentrow] = row[currentrow] + c;

    if (currentrow === 0 || currentrow === numRows - 1) {
      goingdown = !goingdown;
    }

    currentrow = currentrow + (goingdown ? 1 : -1);
  }
  return row.join("");
};
