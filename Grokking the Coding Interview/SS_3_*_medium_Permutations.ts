// https://www.educative.io/courses/grokking-the-coding-interview/B8R83jyN3KY
//
// Permutations

const generate_permutations = function (nums, results = [[nums.shift()]]) {
  for (let num of nums) {
    let level = [];
    for (let res of results) {
      for (let i = 0; i <= res.length; i++) {
        let copy = [...res];
        copy.splice(i, 0, num);
        level.push(copy);
      }
    }
    results = level;
  }
  return results;
}; // T:O(N*N!) S:O(N*N!)  N! permutations N the size of each

function generate_permutations(nums, index = 0, perms = [], results = []) {
  if (index === nums.length) return [perms]; // base case
  for (let i = 0; i <= perms.length; i++) {
    let copy = [...perms];
    copy.splice(i, 0, nums[index]);
    results.push(...generate_permutations(nums, index + 1, copy));
  }
  return results;
} // S:O(N*N!) T:O(N*N! )
