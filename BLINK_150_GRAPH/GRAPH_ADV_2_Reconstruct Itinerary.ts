// https://leetcode.com/problems/reconstruct-itinerary/
// 
// Reconstruct Itinerary




// Every with every
// DFS
// cache
// path as a key
// tickets count
function findItinerary(tickets: string[][], depart = "JFK"): string[] {
    const len = tickets.length;
    const path = [depart];
    const adjList = {};
    const cache = {};

    for (let [from, to] of tickets) {
        if (adjList[from] == null) {
            adjList[from] = {};
        }
        if (adjList[from][to] == null) {
            adjList[from][to] = 0;
        }

        adjList[from][to] += 1;
    }

    function dfs(from) {
        if (path.toString() in cache) return cache[path.toString()];

        if (path.length === len + 1) {
            cache[path.toString()] = true;
            return true; // base case;
        }

        if (adjList[from] == null || adjList[from].length === 0) {
            cache[path.toString()] = false;
            return false; // base case;
        }
        const dest = Object.keys(adjList[from]).sort();
        for (let to of dest) {
            if (adjList[from][to] === 0) continue;
            adjList[from][to]--;
            path.push(to);

            cache[path.toString()] = dfs(to);
            if (cache[path.toString()] == true) return cache[path.toString()];

            path.pop(); // backtrack
            adjList[from][to]++;
        }

        cache[path.toString()] = false;
        return false; // base case
    }

    return dfs(depart) == true ? path : [];
}; // T:O(E^2) S:O(E)