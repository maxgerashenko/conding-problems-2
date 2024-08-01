// Jump Game
//
// https://leetcode.com/problems/jump-game/description/

function canJump(nums: number[]): boolean {
  const n = nums.length;
  let lastValidIndex = n - 1;

  for (
    let currentIndex = lastValidIndex - 1;
    currentIndex >= 0;
    currentIndex--
  ) {
    if (currentIndex + nums[currentIndex] >= lastValidIndex)
      lastValidIndex = currentIndex; // move goal to current
  }

  return lastValidIndex === 0;
} // T:O(n) S:O(1)
