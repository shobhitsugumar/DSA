var hindex = function (citatoin) {
  let h = 0;

  for (let i = 0; i < citatoin.length; i++) {
    if (citatoin[i] >= i + 1) {
      h = i + 1;
    } else {
      break;
    }
  }
  return h;
};
