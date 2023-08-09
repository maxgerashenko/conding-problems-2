// https://leetcode.com/problems/single-number/
// Single Number

// use ^=
// applyed twice cancel the number
// something that appears ones will stays
// T:O(n) S:O(1)

var singleNumber = function (nums) {
  let res = 0;
  for (let num of nums) {
    res ^= num;
  }

  return res;
}; // T:O(n) S:O(n)
