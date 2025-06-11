// https://leetcode.com/problems/course-schedule/description/
// Course Schedule

// HashMap List
// DFS
// Set for visited
// Detect loop when visited and not empty

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  let courses = {};
  let visited = new Set();

  for (let [cur, pre] of prerequisites) {
    courses[cur] ??= [];
    courses[cur].push(pre);
  }
  function dfs(cur) {
    if (visited.has(cur) && courses[cur] && courses[cur].length > 0)
      return false;
    visited.add(Number(cur));
    if (courses[cur] == null || courses[cur].length === 0) return true;
    while (courses[cur]?.length > 0) {
      let last = courses[cur].length - 1;
      if (!dfs(courses[cur][last])) return false;
      courses[cur].pop();
    }
    return true;
  }

  let keys = Object.keys(courses);
  for (let key of keys) {
    if (!dfs(key)) return false;
  }

  return true;
}
// T:O(numCourses^2), graph as linked list
// S:O(numCourses + prerequisites.length) for function
// S:O(prerequisites.length) for call stack
// S:O(numCourses) for Set
// Overall O(numCourses + prerequisites.length)
