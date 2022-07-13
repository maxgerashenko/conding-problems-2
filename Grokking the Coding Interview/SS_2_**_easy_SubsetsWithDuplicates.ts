// Subsets With Duplicates
//
// Subsets With Duplicates

const find_results = function (
  nums,
  results = [[]],
  pre = null,
  preLevel = []
) {
  nums.sort((x, y) => x - y);
  for (let num of nums) {
    let level = [];
    let options = num != pre ? results : preLevel;
    for (let option of options) {
      level.push([...option, num]);
    }
    pre = num;
    preLevel = level;
    results = [...results, ...level];
  }
  return results;
}; // T:O(N^2N) S:O(N2^N)
