// https://leetcode.com/problems/reconstruct-itinerary/
// 
// Reconstruct Itinerary

// Pre order
function findItinerary(tickets: string[][], start = "JFK"): string[] {
    const adjList: { [key: string]: { [key: string]: number } } = {};
    const path: string[] = [start];

    // Build adjacency list with counts
    for (let [from, to] of tickets) {
        if (!adjList[from]) adjList[from] = {}; // init second obj
        adjList[from][to] = (adjList[from][to] || 0) + 1;
    }

    function dfs(from: string): boolean {
        if (path.length === tickets.length + 1) return true; // base case

        const dest = (Object.keys(adjList[from] || {})).sort();
        for (let to of dest) {
            if (adjList[from][to] === 0) continue;

            // Use the ticket
            path.push(to);
            adjList[from][to]--;

            // Recursive DFS
            if (dfs(to)) return true; // base case

            // Backtrack
            path.pop();
            adjList[from][to]++;
        }

        return false; // base case
    }

    return dfs(start) ? path : [];
} // T:O(E^2) S:O(E)


// Post Order
// Post Order
// remove use
// use rest to add to the path
// reverse result
function findItinerary(tickets: string[][], start = "JFK"): string[] {
    const adjList: { [key: string]: string[] } = {};

    // Build adjacency list
    for (let [from, to] of tickets) {
        if (!adjList[from]) adjList[from] = [];
        adjList[from].push(to);
    }

    const path: string[] = [];
    function dfs(from: string): void {
        adjList[from] = adjList[from] || [];
        adjList[from].sort();// lexicographical order


        while (adjList[from].length > 0) {
            dfs(adjList[from].shift()!); // Get the next destination
        }

        path.push(from); // Add airport to path after visiting all destinations
    }

    dfs(start);
    return path.reverse(); // Reverse to get the correct order
} // T:O(E log E) S:(E)
