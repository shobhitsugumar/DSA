var reverseWords = function (res) {
  return res
    .split(" ")
    .filter((ele) => ele != "")
    .reverse()
    .join(" ");
};
