// https://leetcode.com/problems/permutations/
// Permutations

// Recursion
// Backtraring
// Vertical instead for horizontal permutation
// take first el one by one until one left
// add first to the end to all variats
// return all variants
// res -> for nums -> for update each varian

function permute(nums: number[]): number[][] {
  let res = [];
  if (nums.length === 1) return [[...nums]];

  for (let _ in nums) {
    let num = nums.shift();
    let perms = permute(nums);

    perms.map((perm) => perm.push(num));
    res.push(...perms);
    nums.push(num);
  }

  return res;
} // T:O(!N/!n-!m)) S:O(logN)
