// https://leetcode.com/problems/jump-game/description/
//
// Jump Game

// move target to left as right is valid
function canJump(nums: number[]): boolean {
  let len = nums.length;
  let validIndex = len - 1;

  for (let i = len - 2; i >= 0; i--) {
    if (i + nums[i] >= validIndex) {
      validIndex = i;
    }
  }

  return validIndex === 0;
} // T:O(n) S:O(1)
