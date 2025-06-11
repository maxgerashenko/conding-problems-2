// https://leetcode.com/problems/jump-game-ii/description/
//
// Jump Game II

// from left to right
// set min of current or l value + 1
// BFS
function jump(nums: number[]): number {
  let len = nums.length;
  let jumps = Array(len).fill(0);

  for (let l = 0; l < len - 1; l++) {
    let jump = nums[l];

    let r = l + jump;
    let i = l + 1;
    while (i < len && i <= r) {
      jumps[i] =
        jumps[i] === 0 ? jumps[l] + 1 : Math.min(jumps[i], jumps[l] + 1);
      i++;
    }
  }

  return jumps[len - 1];
} // T:O(n) S:O(n)
