// Subsets With Duplicates
//
// Subsets With Duplicates

const find_subsets = function (nums, subs = [[]], pre = null, preLevel = []) {
  nums.sort((x, y) => x - y);
  for (let num of nums) {
    let level = [];
    let options = num !== pre ? [...subs] : [...preLevel];
    for (let opt of options) level.push([...opt, num]);
    pre = num;
    subs = [...subs, ...level];
    preLevel = [...level];
  }
  return subs;
}; // T:O(N2^N) S:O(N2^N)
