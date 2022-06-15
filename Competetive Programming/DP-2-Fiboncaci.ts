// #2
// https://leetcode.com/problems/fibonacci-number/

var fib = function(n) {
  // Constraints
  // 0 <= n <= 30;

  // Use dp array
  // Where dp[i] = dp[i-2] + dp[i-1]

  let dp = [0, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  return dp[n];
};
