// https://leetcode.com/problems/burst-balloons/
//
// Burst Balloons



// [
//   [ 0, 0, 3, 30, 159, 167 ],
//   [ 0, 0, 0, 15, 135, 159 ],
//   [ 0, 0, 0, 0,  40,  48 ],
//   [ 0, 0, 0, 0,  0,   40 ],
//   [ 0, 0, 0, 0,  0,   0 ],
//   [ 0, 0, 0, 0,  0,   0 ]
// ]
function maxCoins(nums: number[]): number {
    let coins = [1, ...nums, 1]; // extend for 
    let len = coins.length;
    let dp = Array(len).fill(null).map(el => Array(len).fill(0)) // n*n

    for (let length = 2; length < len; length++) // could start from 0, does not matter
        for (let left = 0; left < len - length; left++) {
            let right = left + length;
            for (let i = left + 1; i < right; i++) // use actuel from 1 before and after
                dp[left][right] = Math.max(
                    dp[left][right], // max value
                    dp[left][i] + // plus rest on the left
                    coins[left] * // product  left boundary
                    coins[i] * // product last coin
                    coins[right] + // product right boundary
                    dp[i][right] // plus rest on the right
                )
        }

    return dp[0][len - 1]; // top right conner is the aswer
}; // T:O(N^3) S:O(N^2)
