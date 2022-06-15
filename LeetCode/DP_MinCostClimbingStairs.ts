// https://leetcode.com/problems/min-cost-climbing-stairs/
// 746. Min Cost Climbing Stairs

// JSON
var minCostClimbingStairs = function(cost) {    
    // Constraings 
    // 2 <= cost.length
    
    const dp = [cost[0], cost[1]];
    
    for(let i=2;i<cost.length;i++){
        dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2]);
    }
    
    return Math.min(dp[dp.length-1], dp[dp.length-2]);
};

// Python
class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        for i in range(2, len(cost)):
            cost[i] += min(cost[i-1], cost[i-2])
        return min(cost[-1], cost[-2])