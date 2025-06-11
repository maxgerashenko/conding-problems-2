// Coin Change;
//
// https://leetcode.com/problems/coin-change/description/

function coinChange(coins: number[], amount: number): number {
  let res = -1;
  let array = Array(amount + 1).fill(null);
  array[amount] = 0; // base case
  let len = coins.length;

  let pre = [...array].fill(Infinity);
  for (let coin of coins) {
    let cur = [...array];

    for (let i = amount - 1; i >= 0; i--) {
      cur[i] = Math.min(
        pre[i],
        cur[i + coin] != null ? cur[i + coin] + 1 : Infinity
      );
    }

    pre = cur;
  }

  return pre[0] == Infinity ? -1 : pre[0];
} // T:O(M*N) S:O(N)
