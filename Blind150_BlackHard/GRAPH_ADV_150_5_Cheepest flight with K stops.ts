// Cheapest Flights Within K Stops
// https://leetcode.com/problems/cheapest-flights-within-k-stops/

// Deksta n log k Cheapest dfs
// Bellman-Ford n*k Cheapest K like bfs
// Prim’s n^2 MST line bfs

// Bellman-Ford like Dekstra BFS
// like bfss
// dynamic programming
// 2 lines with tmp var
// check all but skip if from is INFINITY not visited
// to = to or pre.from+price
// if no dest return -1
//

function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number
): number {
  let dstPriceMap = {};

  for (let i = 0; i < n; i++) dstPriceMap[i] = Infinity;
  dstPriceMap[src] = 0; // start from

  for (let step = 0; step < k + 1; step++) {
    const tmp = { ...dstPriceMap };
    for (let [from, to, price] of flights) {
      if (dstPriceMap[from] == Infinity) continue; // not visited yet
      tmp[to] = Math.min(tmp[to], dstPriceMap[from] + price);
    }
    dstPriceMap = tmp;
  }

  return dstPriceMap[dst] == Infinity ? -1 : dstPriceMap[dst];
} // T:(V*K) S:O(V)
