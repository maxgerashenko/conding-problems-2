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
  let res = [];
  let coursesMap = {};
  let visited = new Set();

  for (let [cur, pre] of prerequisites) {
    if (coursesMap[cur] == null) {
      coursesMap[cur] = [];
    }
    coursesMap[cur].push(pre);
  }

  for (let i = 0; i < numCourses; i++) {
    if (visited.has(i)) continue;
    let stack = [i];
    while (stack.length) {
      let el = stack[stack.length - 1];
      if (coursesMap[el] == null || coursesMap[el].length === 0) {
        if (visited.has(el)) return [];
        visited.add(el);
        res.push(el);
        stack.pop();
        continue;
      }
      let pre = coursesMap[el].pop();
      if (visited.has(pre)) continue;
      stack.push(pre);
    }
  }

  return res;
} // T:O(2N) S:O(N)
