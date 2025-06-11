// https://leetcode.com/problems/course-schedule-ii/description/
// Course Schedule II

// Topological sort
// Dependencsy MapArray
// Iterate all indexes
// ignore visited indexes
// use stack to remeber the order
// if last value is in visited it is a loop
// otherwice add to to result
// take next from the stack
// T:O(PRE + N) S:O(N)

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const res = [];
  let preConditions = {};
  let visited;

  for (let i = 0; i < numCourses; i++) {
    preConditions[i] = new Set();
  } // init

  for (let [cur, pre] of prerequisites) {
    if (preConditions[cur].has(pre)) continue;
    preConditions[cur].add(pre);
  } // set pre

  function dfs(cur) {
    if (res.indexOf(cur) != -1) return;
    if (visited.has(cur)) return true;
    if (preConditions[cur].size == 0) {
      res.push(cur);
      return;
    }

    visited.add(cur);

    for (let el of Array.from(preConditions[cur])) {
      if (dfs(el)) return true;
      preConditions[cur].delete(el);
    }

    res.push(cur);
  }

  for (let i = 0; i < numCourses; i++) {
    visited = new Set();
    if (dfs(i)) return [];
  }

  return res;
} // T:O(V+N) S:O(N)
