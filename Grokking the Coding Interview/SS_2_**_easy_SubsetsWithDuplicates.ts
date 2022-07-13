// Subsets With Duplicates
//
// Subsets With Duplicates

const find_subsets = function (
  nums,
  results = [[]],
  pre = null,
  preLevel = []
) {
  nums.sort((x, y) => x - y);
  for (let num of nums) {
    let level = [];
    let options = num != pre ? results : preLevel;
    for (let opt of options) {
      level.push([...opt, num]);
    }
    pre = num;
    preLevel = level;
    results = [...results, ...level];
  }
  return results;
}; // T:O(N2^N) S:O(N2^N)
