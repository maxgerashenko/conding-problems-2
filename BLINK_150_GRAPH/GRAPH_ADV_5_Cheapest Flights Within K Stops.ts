// https://leetcode.com/problems/cheapest-flights-within-k-stops/
//
// Cheapest Flights Within K Stops

// BFS
// tmp visited
// tmp prices
// BELMAN FORD ALGO
function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    let minPrices = {};
    let visited = new Set();
    for (let i = 0; i < n; i++) {
        minPrices[i] = Infinity;
    }
    visited.add(src);
    minPrices[src] = 0;

    for (let count = 0; count < k + 1; count++) {
        let tmpVisited = [];
        let tmpPrices = { ...minPrices };
        for (let [from, to, price] of flights) {
            if (!visited.has(from)) continue;// skip if not visited;
            tmpPrices[to] = Math.min(tmpPrices[to], minPrices[from] + price);
            tmpVisited.push(to);
        }
        visited = new Set([...visited, ...tmpVisited]);
        minPrices = tmpPrices;
    }

    return minPrices[dst] === Infinity ? -1 : minPrices[dst];
}; // T:O(V + N) S:O(N)