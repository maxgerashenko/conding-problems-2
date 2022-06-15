

var maxProfit = function (prices) {
  // catch erro
  let diff = 0;
  let max = prices.shift();
  let min = max;

  for (let el of prices) {
    if (el < min) {
      min = el;
      max = el;
    }
    if (el > max) {
      max = el;
    }
    diff = Math.max(diff, max - min);
  }

  return diff;
}; // T:O(N) S:(1)
