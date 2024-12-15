// https://leetcode.com/problems/house-robber-ii/
//
// House Robber II

// For the circle use 2 arrays
// check conner cases twice
// slice includes last if not mentioned

function rob(nums: number[]): number {
  const totalLen = nums.length;

  if (totalLen < 3) return Math.max(...nums);

  function find(part) {
    const len = part.length;
    if (len < 3) return Math.max(...part);

    const dp = Array(len).fill(0);
    [dp[0], dp[1]] = [part[0], Math.max(part[0], part[1])];
    for (let i = 2; i < len; i++) {
      dp[i] = Math.max(part[i] + dp[i - 2], dp[i - 1]);
    }
    return dp[len - 1];
  }

  return Math.max(find(nums.slice(0, totalLen - 1)), find(nums.slice(1)));
} // T:O(n) S:O(1)
