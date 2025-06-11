// Cheapest Flights Within K Stops
// https://leetcode.com/problems/cheapest-flights-within-k-stops/

// Deksta n log k Cheapest dfs
// Bellman-Ford n*k Cheapest K like bfs
// Prim’s n^2 MST line bfs

// Bellman-Ford
// like bfs
// dynamic programming
// 2 lines with tmp var
// check all but skip if from is INFINITY not visited
// to = to or pre.from+price
// if no dest return -1

function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number
): number {
  // init
  let consts = new Array(n).fill(Infinity);
  consts[src] = 0; // mark start

  for (; k + 1 > 0; k--) {
    let tmp = [...consts];
    for (let [from, to, price] of flights) {
      if (consts[from] == Infinity) continue;
      tmp[to] = Math.min(tmp[to], consts[from] + price);
    }
    consts = tmp;
  }

  return consts[dst] == Infinity ? -1 : consts[dst]; // check if reached the end
} // T:O(N * K) S:O(N)
