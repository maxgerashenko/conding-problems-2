// Decode Ways
// https://leetcode.com/problems/decode-ways/description/

// Make steps 1 or 2
// + condistion
// dp reverse

// dp
function numDecodings(s: string): number {
  const dp = [];
  const len = s.length;
  dp[len] = 1;

  for (let i = len - 1; i >= 0; i--) {
    if (s[i] == '0') {
      dp[i] = 0;
      continue;
    }
    dp[i] = dp[i + 1];
    if (
      i + 1 < len &&
      (s[i] === '1' || (s[i] === '2' && Number(s[i + 1]) <= 6))
    ) {
      dp[i] += dp[i + 2];
    }
  }
  return dp[0];
} // T:O(N) S:O(N)

// recursive + cache
function numDecodings(s: string): number {
  const dp = [];
  const len = s.length;

  function dfs(i) {
    if (i > len - 1) return 1; // base case for out of bounce
    if (s[i] == '0') return 0;
    if (i in dp) return dp[i];

    let res = dfs(i + 1);
    if (
      i + 1 < len &&
      (s[i] === '1' || (s[i] === '2' && Number(s[i + 1]) <= 6))
    ) {
      res += dfs(i + 2);
    }
    dp[i] = res;
    return res;
  }
  return dfs(0);
} // T:O(N) S:O(N)
