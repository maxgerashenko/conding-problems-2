// Jump Game
//
// https://leetcode.com/problems/jump-game/description/

function canJump(nums: number[], n = nums.length, valid = n - 1): boolean {
  for (let cur = valid - 1; cur >= 0; cur--)
    if (cur + nums[cur] >= valid) valid = cur; // move goal to current

  return valid === 0;
} // T:O(n) S:O(1)
