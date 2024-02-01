// https://leetcode.com/problems/reconstruct-itinerary/
// Reconstruct Itinerary

// use adjacency list
// use dfs
// use back tracking
// use sort airports
//
// T:O(E^2) S:O(E)

function findItinerary(tickets: string[][]): string[] {
  const res = ['JFK'];
  const adj = {};
  const cache = {};

  for (let [from, to] of tickets) {
    if (adj[from] == null) {
      adj[from] = {};
    }
    if (adj[from][to] == null) {
      adj[from][to] = 0;
    }
    adj[from][to]++;
  }

  function dfs(from) {
    if (res.toString() in cache) return cache[res.toString()];
    if (res.length === tickets.length + 1) return true;
    if (adj[from] == null || adj[from].length === 0) {
      cache[res.toString()] === false;
      return false;
    }

    const destinations = Object.keys(adj[from]).sort((a, b) =>
      a < b ? -1 : 1
    );
    for (let to of destinations) {
      if (adj[from][to] === 0) continue;
      res.push(to);
      adj[from][to]--;
      if (dfs(to)) return true;
      res.pop(); // backtrack
      adj[from][to]++; // backtrack
    }
    cache[res.toString()] === false;
    return false;
  }

  return dfs('JFK') ? res : [];
} // T:O(E^2) S:O(E)
