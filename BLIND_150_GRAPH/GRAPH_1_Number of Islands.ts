// https://leetcode.com/problems/number-of-islands/description/
// 
// Number of Islands




function pacificAtlantic(heights: number[][]): number[][] {
    const [m, n] = [heights.length, heights[0].length];
    const [topLeftSet, bottomRightSet] = [new Set(), new Set()];
    const [toLeftQueue, bottomRightQueue] = [[], []];
    const dir = [[1, 0], [0, 1], [-1, 0], [0, -1]];

    // init sets & queues
    for (let j = 0; j < m; j++) {
        // left
        topLeftSet.add(`${j},0`);
        toLeftQueue.push([j, 0]);
        // right
        bottomRightSet.add(`${j},${n - 1}`);
        bottomRightQueue.push([j, n - 1]);
    };

    for (let i = 0; i < n; i++) {
        // top
        topLeftSet.add(`0,${i}`);
        toLeftQueue.push([0, i]);
        // bottom
        bottomRightSet.add(`${m - 1},${i}`);
        bottomRightQueue.push([m - 1, i]);
    }

    function bfs(queue, set) {
        while (queue.length > 0) {
            const tmp = [];
            for (let [j, i] of queue) {
                for (let [dJ, dI] of dir) {
                    const [newJ, newI] = [j + dJ, i + dI];
                    const key = `${newJ},${newI}`;
                    if (newJ < 0 || newI < 0 || newJ >= m || newI >= n) continue;
                    if (set.has(key)) continue;
                    if (heights[newJ][newI] < heights[j][i]) continue; // base case
                    set.add(key);
                    tmp.push([newJ, newI]);
                }
            }
            queue = [...tmp];
        }
    }

    bfs(toLeftQueue, topLeftSet);
    bfs(bottomRightQueue, bottomRightSet);

    const res = [];
    for (let j = 0; j < m; j++) {
        for (let i = 0; i < n; i++) {
            const key = `${j},${i}`;
            if (topLeftSet.has(key) && bottomRightSet.has(key)) {
                res.push([j, i]);
            }
        }
    }

    return res;
} // T:O(n*m) S:O(m*m)
