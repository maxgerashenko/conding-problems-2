/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let map = {};

  for (let el of nums) {
    if (el in map) return true;
    map[el] = true;
  }
  return false;
};
// O(n) S(n)
