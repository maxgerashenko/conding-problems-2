// https://leetcode.com/problems/jump-game/description/
// Jump Game

// DP 0;
// reversed order
// >= goal is true;

function canJump(nums: number[]): boolean {
  let goalIndex = nums.length - 1;
  for (let i = goalIndex - 1; i >= 0; i--) {
    let step = nums[i];

    if (step >= goalIndex - i) {
      goalIndex = i;
    }
  }

  return goalIndex === 0;
} // T:O(N) S:O(1)
