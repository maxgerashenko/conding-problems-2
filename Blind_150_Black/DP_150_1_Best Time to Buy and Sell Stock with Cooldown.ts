/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const hashMap = {};
  const n = prices.length;

  function dfs(index, canBuy) {
    if (index > n - 1) return 0; // conner case coz i+2

    if (hashMap[`${index},${canBuy}`] != null)
      return hashMap[`${index},${canBuy}`]; // hashmap

    let price = prices[index];
    hashMap[`${index},${canBuy}`] = canBuy
      ? Math.max(-price + dfs(index + 1, false), dfs(index + 1, true))
      : Math.max(+price + dfs(index + 2, true), dfs(index + 1, false));

    return hashMap[`${index},${canBuy}`];
  }

  return dfs(0, true);
}; // T:O(N) S:O(N)
