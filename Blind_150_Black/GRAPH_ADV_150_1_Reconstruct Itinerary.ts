// https://leetcode.com/problems/reconstruct-itinerary/
// Reconstruct Itinerary

// use adjacency list
// use dfs
// use back tracking
// use sort airports
//
// T:O(E^2) S:O(E)
function findItinerary(tickets: string[][]): string[] {
  let res = [];
  let adj = {};

  // init
  for (let [from, to] of tickets) {
    if (adj[from] == null) {
      adj[from] = [];
    }
    adj[from].push(to);
  }

  for (let from of Object.keys(adj)) adj[from].sort((a, b) => (a < b ? -1 : 1)); // sort

  function dfs(from) {
    res.push(from);
    if (res.length === tickets.length + 1) return true; // base case
    if (adj[from] == null || adj[from].length == 0) return false; // conner case

    let tmp = [...adj[from]];
    for (let to of tmp) {
      adj[from].shift();
      if (dfs(to)) {
        return true;
      }
      adj[from].push(to);
      res.pop();
    }
  }

  return dfs('JFK') ? res : [];
} // T:O(E^2) S:O(E)
