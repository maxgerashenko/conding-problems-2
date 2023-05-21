// Decode Ways
// https://leetcode.com/problems/decode-ways/description/

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
