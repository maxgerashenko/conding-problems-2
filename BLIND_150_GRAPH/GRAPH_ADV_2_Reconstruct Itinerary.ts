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

// DFS
// post order
// reverse
function findItinerary(tickets: string[][], start = "JFK"): string[] {
    const adjList = {};
    const path = [] as string[];

    for (let [from, to] of tickets) {
        if (adjList[from] == null) adjList[from] = [];
        adjList[from].push(to);
    } // init adj list

    function dfs(from) {
        (adjList[from] || []).sort();
        while ((adjList[from] || []).length > 0) {
            const to = adjList[from].shift() // in lexical order
            dfs(to);
        }

        path.push(from);
    }
    dfs(start);

    return path.reverse();
}; // T:O(ElogE) S:O(E)
