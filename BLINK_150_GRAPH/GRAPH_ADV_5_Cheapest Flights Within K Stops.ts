// https://leetcode.com/problems/cheapest-flights-within-k-stops/
//
// Cheapest Flights Within K Stops


// Like BFS But FORD
// not visited is INFINITY
// tmp visited and price for BFS
function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    let minPrice = {};

    for (let i = 0; i < n; i++) {
        minPrice[i] = Infinity;
    }
    minPrice[src] = 0; // visited

    for (let i = 0; i < k + 1; i++) {
        const tmp = { ...minPrice }; // tmp visited
        for (let [from, to, price] of flights) {
            if (minPrice[from] === Infinity) continue;

            tmp[to] = Math.min(tmp[to], minPrice[from] + price); // update price dynamicly
        }
        minPrice = tmp;
    }

    return minPrice[dst] === Infinity ? -1 : minPrice[dst];
}; // T:O(V+E) S:O(V)