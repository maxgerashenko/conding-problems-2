// https://leetcode.com/problems/coin-change-ii/
// Coin Change II

// DFS + hashMap
// return 1 when is target
// return 0 when not target
// take the same count
// or take another coin
// hash result
//
// T:O(n*target) S:O(n*target)

var change = function (target, coins) {
  let hashMap = {};
  let n = coins.length;

  function dfs(index, count, sum) {
    if (hashMap[`${index},${sum}`] != null) return hashMap[`${index},${sum}`]; // cash

    if (sum < 0 || index > n - 1) return 0; // conner case
    if (sum === 0) return 1;

    hashMap[`${index},${sum}`] =
      dfs(index, count + 1, sum - coins[index]) + dfs(index + 1, count, sum);

    return hashMap[`${index},${sum}`];
  }

  return dfs(0, 0, target);
}; // T:O(N*target) S:(N*target)
