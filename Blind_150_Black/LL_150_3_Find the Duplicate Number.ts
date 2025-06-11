// https://leetcode.com/problems/find-the-duplicate-number/submissions/
// Find the Duplicate Number

// use fast and slow
// can't use circle search, spaw thing
// ignore 1rst value
// use index as number
// ignore el in right position
// find the loop
// find the start
// return start;

function findDuplicate(nums: number[]): number {
  let n = nums.length;
  for (let index = 0; index < n; index++) {
    if (index === nums[index]) continue;

    let slow = index;
    let fast = index;
    while (true) {
      slow = nums[slow];
      fast = nums[fast];
      fast = nums[fast];
      if (slow === fast) break;
    }

    let start = 0;
    while (true) {
      start = nums[start];
      slow = nums[slow];
      if (start === slow) return start;
    }
  }
} //T:O(n) S:O(1)
