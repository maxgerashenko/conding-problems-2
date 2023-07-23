// https://leetcode.com/problems/reconstruct-itinerary/
// Reconstruct Itinerary

// use dfs
// use hashMapArray
// use backtracking
// use backtracking for array
// return true and track true to retur result
// sort destinations to get sored result
// start with desitnation end when res.lenght === tickets.length + 1
// T:O(E + V^2) S:(V) Vert is nodes, Edges are trips

function findItinerary(tickets: string[][]): string[] {
  let res = ['JFK'];
  let hashMapArray = {};

  for (let [dep, dest] of tickets) {
    if (hashMapArray[dep] == null) {
      hashMapArray[dep] = [];
    }
    hashMapArray[dep].push(dest);
  } // init adjecency list

  for (let key of Object.keys(hashMapArray)) hashMapArray[key].sort(); // sort

  function dfs(dep) {
    if (res.length === tickets.length + 1) return true; // base case
    if (hashMapArray[dep] == null || hashMapArray[dep].length === 0)
      return false; // conner case;

    let tmp = hashMapArray[dep];
    for (let index = 0; index < tmp.length; index++) {
      let dest = hashMapArray[dep][index];
      hashMapArray[dep] = [
        ...hashMapArray[dep].slice(0, index),
        ...hashMapArray[dep].slice(index + 1),
      ];
      res.push(dest);
      if (dfs(dest)) return res;
      res.pop();
      hashMapArray[dep] = tmp;
    }
  }
  dfs('JFK'); // start with destination

  return res;
} // T:O(V + E^2) S:O(E)
