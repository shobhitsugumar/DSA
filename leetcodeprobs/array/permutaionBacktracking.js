//permutation : here we use backtracking . we use backtracking if we need to give many result

function permutation(arr) {
  let reslut = [];

  function backtracking(currentperm, remainingInOriginalArr) {
    if (remainingInOriginalArr.length === 0) {
      reslut.push([...currentperm]);
      return;
    }

    for (let i = 0; i < remainingInOriginalArr.length; i++) {
      currentperm.push(remainingInOriginalArr[i]);
      backtracking(
        currentperm,
        remainingInOriginalArr
          .slice(0, i)
          .concat(remainingInOriginalArr.slice(i + 1))
      );
      //we pop out the element from the currentperm
      currentperm.pop();
    }
  }

  backtracking([], arr);
  return;
}
