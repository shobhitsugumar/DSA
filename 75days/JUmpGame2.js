// 45. Jump Game II

var jump = function (nums) {
  //lets take jump to keep track of how many jump we have done
  let jump = 0;
  /*let take end variable if the i reached the end we will increment the jump . thats beacuse it means we’ve explored all indices we can reach with the current jump,
so we must make another jump and extend our range to far.*/
  let end = 0;
  let far = 0; // to keep track how far we can jummp for a current index

  for (let i = 0; i < nums.length - 1; i++) {
    // update the farthest reachable index using position i
    far = Math.max(far, i + nums[i]);
    // if we reach the boundary of the current jump range,
    // we must perform a jump (increase count) and start the next range
    if (i === end) {
      jump++;
      end = far;
    }
    //we check if i exceedes the far then we return 0
    if (i > far) {
      return 0;
    }
  }

  return jump;
};
