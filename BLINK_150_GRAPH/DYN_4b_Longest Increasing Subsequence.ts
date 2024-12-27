// https://leetcode.com/problems/longest-increasing-subsequence/
// 
// Longest Increasing Subsequence

// Every to every pre and cur
// dp = max(pre + 1, cur)


function lengthOfLIS(nums: number[]): number {
    const len = nums.length;
    if (len === 0) return 0;

    const dp = new Array<number>(len).fill(1); // base case max len 1 for each

    // Build the dp array
    for (let cur = 1; cur < len; cur++) {
        for (let pre = 0; pre < cur; pre++) {
            if (nums[pre] >= nums[cur]) continue;
            dp[cur] = Math.max(dp[cur], dp[pre] + 1);
        }
    }

    // The result is the maximum value in dp
    return Math.max(...dp);
}