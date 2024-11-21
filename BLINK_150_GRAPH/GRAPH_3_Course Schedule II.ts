// https://leetcode.com/problems/course-schedule-ii/
//
// Course Schedule II


// BFS
// Topological Sort
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const res = [];
    const postListArray = Array(numCourses).fill(0).map((_) => []);
    const preCountArray = Array(numCourses).fill(0);

    for (let [post, pre] of prerequisites) {
        postListArray[pre].push(post);
        preCountArray[post]++;
    }

    const level = [];
    for (let i = 0; i < numCourses; i++) {
        if (preCountArray[i] > 0) continue;
        level.push(i);
    } // init level

    let cur = 0; // optimize shift();
    while (cur < level.length) {
        let tmp = level.length;
        for (let index = cur; index < tmp; index++) {
            const pre = level[index]
            res.push(pre);

            for (let post of postListArray[pre]) {
                preCountArray[post]--;
                if (preCountArray[post] > 0) continue;
                level.push(post);
            }
        }
        cur = tmp;
    }

    return res.length == numCourses ? res : [];
}; // T:O(V + E) S:O(V + E)



// dfs post order
// backtracking
// cycle detection
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const postPreArray = Array(numCourses).fill(null).map(_ => []);
    const visited = new Set();
    const cycle = new Set();

    for (let [post, pre] of prerequisites) postPreArray[post].push(pre);

     // Build the adjacency list: course -> list of prerequisites
    for (let [post, pre] of prerequisites)  postPreArray[post].push(pre);

    const res = [];
    function dfs(post) {
        if (visited.has(post)) return true;
        if (cycle.has(post)) return false;

        cycle.add(post);

        for (let pre of postPreArray[post]) {
            if (dfs(pre) == false) return false;
        }

        cycle.delete(post)
        visited.add(post)
        res.push(post);
    }

    for (let index = 0; index < numCourses; index++) {
        if (visited.has(index)) continue;
        if (dfs(index) == false) return [];
    }

    return res;
}; // T:O(V + E) S:O(V + E)