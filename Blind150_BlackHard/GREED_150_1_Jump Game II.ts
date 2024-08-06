// Jump Game II
//
// https://leetcode.com/problems/jump-game-ii/description/
function jump(nums: number[]): number {
  let n = nums.length;
  let l = 0;
  let r = 0;
  let level = 0;

  while (r < n - 1) {
    let newR = r;
    for (let i = l; i <= r; i++) {
      let step = nums[i];
      newR = Math.max(newR, i + step);
    }
    l = r + 1;
    r = newR;
    level++;
  }

  return level;
} // T:O(n) S:O(1);
