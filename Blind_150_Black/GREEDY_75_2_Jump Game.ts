// https://leetcode.com/problems/jump-game/description/
// Jump Game

// use greedy
// as we can jupt any distance of num[i]
// can do reverse from the back top down
// if can reach curret last update last to curent
//
// T:O(n) S:O(1)

function canJump(nums: number[]): boolean {
  const n = nums.length;
  let last = n - 1;

  for (let i = n - 2; i >= 0; i--) {
    if (i + nums[i] >= last) {
      last = i;
    }
  }

  return last === 0;
} // T:O(n) S:O(1)

// use dp
// check all posible jumps
// use cash
// base case true, i===n-1
// base case false, i===0;
//
// T:O(n^2) S:O(n^2)

function canJump(nums: number[]): boolean {
  const dp = {};
  const n = nums.length;

  function dfs(i) {
    if (i in dp) return dp[i];
    if (i >= n - 1) return true;
    if (nums[i] === 0) return false;

    for (let j = 1; j <= nums[i]; j++) {
      if (dfs(i + j)) {
        dp[i] = true;
        return dp[i];
      }
    }
    dp[i] = false;
    return dp[i];
  }
  return dfs(0);
} // T:O(n*m) S:O(n*m)
