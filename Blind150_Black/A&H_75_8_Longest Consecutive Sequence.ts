// https://leetcode.com/problems/longest-consecutive-sequence/description/
// Longest Consecutive Sequence

// use HashSet
// iterate nums
// ignore not the start
// follow the sequence
// return max

function longestConsecutive(nums: number[]): number {
  let hashSet = new Set(nums);
  let max = 0;

  for (let el of nums) {
    if (hashSet.has(el - 1)) continue;
    let count = 0;
    while (hashSet.has(el)) {
      count++;
      el++;
    }
    max = Math.max(max, count);
  }

  return max;
} // T:O(n) S:O(n)
