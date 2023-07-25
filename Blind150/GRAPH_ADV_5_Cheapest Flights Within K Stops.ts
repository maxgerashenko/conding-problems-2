// https://leetcode.com/problems/cheapest-flights-within-k-stops/
// Cheapest Flights Within K Stops

// use ford alog
// use pseudo BFS
// use arrya for stops prices
// use tmp arrya for stop prices
// init stops prices with INFINITY
// if prices[dest] === INFINITY ignore
// update tmp prices as visited,
// that is why we need to update original after all chahges on the level
// ignore not touched stops when price is still INFINITY

function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number
): number {
  let prices = new Array(n).fill(Infinity);
  prices[0] = 0;
  for (let i = 0; i < k + 1; i++) {
    let tmp = [...prices];
    for (let [dep, dest, price] of flights) {
      if (prices[dep] === Infinity) continue; // guranty BFS
      tmp[dest] = Math.min(tmp[dest], prices[dep] + price);
    }
    prices = tmp;
  }

  return prices[dst] === Infinity ? -1 : prices[dst];
} // T:O((V+E)*(K+1)) S:O(V)// T:O((V+E)*(K+1)) S:O(V)
