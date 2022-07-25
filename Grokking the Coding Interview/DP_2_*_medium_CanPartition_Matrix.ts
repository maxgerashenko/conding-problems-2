// Equal Subset Sum Partition (medium)
//
// https://www.educative.io/courses/grokking-the-coding-interview/g7QYlD8RwRr

const canPartition = function (nums, sum, half = sum / 2, dp = []) {
  if (sum % 2 !== 0) return false;
  for (let i = 0; i < nums.length; i++) dp[i] = [true]; // 1st col
  for (let s = 1; s < half + 1; s++) dp[0][s] = nums[0] === s; // 1st row
  for (let i = 1; i < nums.length; i++) {
    for (let s = 1; s < half + 1; s++) {
      dp[i][s] = dp[i - 1][s] || dp[i - 1][half - s]; // previus or
    }
  }
  return dp[nums.length - 1][half];
}; // T:(N*S) S:O(N*S)

console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 3, 4])}`);
console.log(`Can partitioning be done: ---> ${canPartition([1, 1, 3, 4, 7])}`);
console.log(`Can partitioning be done: ---> ${canPartition([2, 3, 4, 6])}`);
