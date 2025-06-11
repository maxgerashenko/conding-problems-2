// Jump Game II
// https://leetcode.com/problems/jump-game-ii/description/

// DP or Greedy BFS
// BFS
// use l and r, init l=r=0
// use max(r)
// l = r+1;
// while r < n-1
// T:O(n^2) S:O(1)

function jump(nums: number[]): number {
  let count = 0;
  let l = 0;
  let r = 0;
  let n = nums.length;

  // bfs
  while (r < n - 1) {
    let tmp = 0;
    for (let i = l; i <= r; i++) {
      tmp = Math.max(tmp, i + nums[i]);
    }
    l = r + 1;
    r = tmp;
    count++;
  }
  return count;
} // T:O(N^2) S:O(1)
