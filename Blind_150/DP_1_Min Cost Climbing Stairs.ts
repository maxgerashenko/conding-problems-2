// https://leetcode.com/problems/min-cost-climbing-stairs/
// Min Cost Climbing Stairs

// use DP
// understand from graph and cashing
// use reversed order
// the top value is next after the last
// itereate from n-3
// cur = cur + Min(i+1, i+2)
// return min of i[0] vs i[1]
// T:O(N) S:O(N), existing array S:O(1) with out
// The bruteforce is T:O(2^N) S:O(N)

function minCostClimbingStairs(cost: number[]): number {
  cost.push(0); // add top value

  for (let i = cost.length - 1 - 1 - 1; i >= 0; i--)
    cost[i] += Math.min(cost[i + 1], cost[i + 2]);

  return Math.min(cost[0], cost[1]);
} // T:O(N) S:O(1)
