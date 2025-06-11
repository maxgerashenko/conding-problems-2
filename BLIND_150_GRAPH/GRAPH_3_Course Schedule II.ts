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
    const adjList = Array(numCourses).fill(0).map(() => []);
    const res = [];

    for (let [post, pre] of prerequisites) adjList[pre].push(post); // init adjs list

    const path = new Set();  // cycle
    const visited = new Set();
    function dfs(post) {
        if (path.has(post)) return true ;// cycle
        if (visited.has(post)) return false; 

        path.add(post);

        for (let pre of adjList[post]) {
            if (dfs(pre)) return true;
        }

        path.delete(post);
        visited.add(post);
        res.push(post);
        return false;
    }

    for (let i = 0; i < numCourses; i++) {
        if (dfs(i)) return []; // conner case
    }

    return res.reverse(); // base case
}; // T:O(V+E) S:O(V+E)