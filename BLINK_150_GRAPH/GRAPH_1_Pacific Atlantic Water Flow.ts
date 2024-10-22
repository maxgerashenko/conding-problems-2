// https://leetcode.com/problems/pacific-atlantic-water-flow/
// 
// Pacific Atlantic Water Flow



function pacificAtlantic(heights: number[][]): number[][] {
    const [m, n] = [heights.length, heights[0].length];
    const dir = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    let [bottomRightSet, topLeftSet] = [new Set<string>(), new Set<string>()];
    let [bottomRightQueue, topLeftQueue] = [[], []];

    // Init queues and sets
    for (let j = 0; j < m; j++) {
        bottomRightQueue.push([j, 0]);
        bottomRightSet.add(`${j},0`);
        topLeftQueue.push([j, n - 1]);
        topLeftSet.add(`${j},${n - 1}`);
    }
    for (let i = 0; i < n; i++) {
        bottomRightQueue.push([0, i]);
        bottomRightSet.add(`0,${i}`);
        topLeftQueue.push([m - 1, i]);
        topLeftSet.add(`${m - 1},${i}`);
    }

    function BFS(queue: number[][], set: Set<string>) {
        while (queue.length > 0) {
            let tmp = [];
            for (let [j, i] of queue) {
                for (const [dj, di] of dir) {
                    const newJ = j + dj;
                    const newI = i + di;
                    const key = `${newJ},${newI}`;
                    if (newJ < 0 || newI < 0 || newJ >= m || newI >= n) continue;
                    if (set.has(key)) continue;
                    if (heights[newJ][newI] < heights[j][i]) continue;
                    set.add(key);
                    tmp.push([newJ, newI]);
                }
            }
            queue = tmp;
        }
    }

    // Perform BFS for both oceans
    BFS(bottomRightQueue, bottomRightSet);
    BFS(topLeftQueue, topLeftSet);

    // Find intersection
    const res: number[][] = [];
    for (let j = 0; j < m; j++) {
        for (let i = 0; i < n; i++) {
            const key = `${j},${i}`;
            if (!topLeftSet.has(key) || !bottomRightSet.has(key)) continue;
            res.push([j, i]);
        }
    }

    return res;
}; // T: O(m * n), S: O(m * n)
