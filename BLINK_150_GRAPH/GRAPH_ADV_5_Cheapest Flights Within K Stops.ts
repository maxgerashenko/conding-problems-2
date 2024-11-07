// https://leetcode.com/problems/cheapest-flights-within-k-stops/
//
// Cheapest Flights Within K Stops


function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    const flightsListMap: { [key: number]: [number, number][] } = {};
    const costs = new Array(n).fill(Infinity);

    // Initialize adjacency list
    for (let [start, stop, price] of flights) {
        if (!flightsListMap[start]) {
            flightsListMap[start] = [];
        }
        flightsListMap[start].push([stop, price]);
    }
    costs[src] = 0; // start

    // Perform BFS with up to k stops
    let level = [[src, 0]];
    for (let i = 0; i <= k; i++) {
        const tmp = [...level]; // Copy the current level to avoid interference
        level = []; // Reset level for new additions

        for (let [stop, currentCost] of tmp) {
            if (!flightsListMap[stop]) continue; // Skip if no outgoing flights

            for (let [next, price] of flightsListMap[stop]) {
                const newCost = currentCost + price;

                // Update cost if new path is cheaper
                if (newCost >= costs[next]) continue;
                costs[next] = newCost;
                level.push([next, newCost]); // Queue for the next level
            }
        }
    }

    return costs[dst] === Infinity ? -1 : costs[dst];
} // T:O(E +V * k) S:O(V)


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