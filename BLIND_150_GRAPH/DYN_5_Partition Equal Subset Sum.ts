// https://leetcode.com/problems/partition-equal-subset-sum/
// 
// Partition Equal Subset


// Check all variants
// Matrix aproach
// But copy results from prev level
// Revesed to keep local updats independent


function canPartition(nums: number[]): boolean {
    let sum = nums.reduce((acc, i) => acc + i, 0);
    if (sum % 2 !== 0) return false;

    const target = sum / 2;
    let dp = new Array(target + 1).fill(false);
    dp[0] = true;

    for (let num of nums) {
        for (let t = target; t >= num; t--) {
            if (dp[t - num]) {
                dp[t] = true;
            }
        }
        if (dp[target]) return true;
    }

    return dp[target];
} // T:O(n*sum) S:O(sum)

