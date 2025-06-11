// https://leetcode.com/problems/jump-game-ii/description/
// Jump Game II

// NOT DP
// GREEDY
// ANALOG OF BFS
// USE l and r
// start l = r = 0
// count stepts
// l = r+1
// r = max
// while r < n-1
//
// T:O(n) S:O(1)

function jump(nums: number[]): number {
  let l = 0;
  let r = 0;
  let n = nums.length;
  let steps = 0;

  while (r < n - 1) {
    steps++;
    let max = 0;
    for (let i = l; i <= r; i++) {
      max = Math.max(max, i + nums[i]);
    }
    l = r + 1;
    r = max;
  }

  return steps;
} // T:O(n) S:O(1)
