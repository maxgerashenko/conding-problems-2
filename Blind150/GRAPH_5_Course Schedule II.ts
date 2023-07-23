// https://leetcode.com/problems/course-schedule-ii/
// Course Schedule II

// use DFS
// use Topological sort (relationships)
// use HashMapArray for relationships
// use pathSet to detect cycles
// inint all indexes with [] in hashMapArray
// set relationships
// return false to exit from dfs when cycle detected
// use visited set to skip visited
// use BackTracking for the Path
// add index at the end to get reversed order(history)
// iterate all indexes, 0..N empty relations will be ingored as arr is [];
// T:O(Nodes + Connections) S:O(Nodes + Connections) as call stack

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  let res = [];
  let visited = new Set();
  let path = new Set();

  let hashMapArray = {};
  for (let index = 0; index < numCourses; index++) hashMapArray[index] = [];
  for (let [course, pre] of prerequisites) hashMapArray[course].push(pre); // fill hashMapArray

  function dfs(index) {
    if (path.has(index)) return false; // conner case cycle
    if (visited.has(index)) return true; // conner case visited

    path.add(index);
    for (let el of hashMapArray[index]) {
      let status = dfs(el);
      if (!status) return false;
    }
    path.delete(index);
    visited.add(index);
    res.push(index);
    return true;
  }

  for (let index = 0; index < numCourses; index++) {
    let status = dfs(index);
    if (!status) return [];
  }

  return res;
} // T:O(N+V) // courses + prereq; S:O(N)
