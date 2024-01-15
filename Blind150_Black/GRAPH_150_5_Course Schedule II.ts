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
  const adjList = {};
  let path = new Set();
  let visited = new Set();

  for (let cur = 0; cur < numCourses; cur++) adjList[cur] = []; // init all courses;
  for (let [cur, pre] of prerequisites) adjList[cur].push(pre); // set all presets;

  function dfs(cur) {
    if (path.has(cur)) return true;
    if (visited.has(cur)) return;
    path.add(cur);
    visited.add(cur);
    while (adjList[cur].length) if (dfs(adjList[cur].pop())) return true;
    res.push(cur);
    path.delete(cur);
  }

  for (let cur = 0; cur < numCourses; cur++) if (dfs(cur)) return []; // check all

  return res;
} // T:O(V+N) S:O(N)
