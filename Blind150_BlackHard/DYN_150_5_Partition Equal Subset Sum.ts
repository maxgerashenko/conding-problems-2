// Partition Equal Subset Sum
//
// https://leetcode.com/problems/partition-equal-subset-sum/description/

function canPartition(nums: number[]): boolean {
  let sum = nums.reduce((pre, cur) => pre + cur, 0);
  console.log(sum);
  if (sum % 2 === 1) return false;

  let target = sum / 2;
  let set: Set<number> = new Set([0]);
  for (let el of nums) {
    let tmp = [...set.values()];
    for (let distict of tmp) {
      let cur = distict + el;
      if (cur === target) return true;
      if (cur > target) continue;
      set.add(cur);
    }
  }
  return false;
} // T:O(n) S:O(sum)
