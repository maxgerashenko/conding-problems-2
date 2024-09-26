// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/
//
// Best Time to Buy and Sell Stock with Cooldown

function maxProfit(prices: number[]): number {
    const len = prices.length;
    const dp = new Map();

    function dfs(index = 0, canSell = false) {
        let key = `${index}, ${canSell}`;
        let price = prices[index];
        if (index >= len) return 0;
        if (key in dp) return dp[key];

        let standBy = dfs(index + 1, canSell);
        if (canSell) {
            dp[key] = Math.max(
                dfs(index + 2, false) + price,
                standBy
            )
            return dp[key];
        }

        dp[key] = Math.max(
            dfs(index + 1, true) - price,
            standBy
        )
        return dp[key];
    }

    return dfs();
}; // T:O(n) S:O(n)