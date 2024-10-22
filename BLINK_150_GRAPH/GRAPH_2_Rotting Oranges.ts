// https://leetcode.com/problems/rotting-oranges/
// 
// Rotting Oranges


function orangesRotting(grid: number[][]): number {
    const dir = [[1, 0], [0, 1], [-1, 0], [0, -1],];
    const [m, n] = [grid.length, grid[0].length];
    let queue = [];
    let levelCount = 0;
    let freshCount = 0;

    // init freshCount and queue
    for (let j = 0; j < m; j++) {
        for (let i = 0; i < n; i++) {
            let cell = grid[j][i];
            if (cell === 2) {
                queue.push([j, i]);
                continue;
            }
            if (cell === 1) freshCount++;
        }
    }

    if (freshCount === 0) return 0; // check conner case

    if (queue.length === 0) return -1; // check conner case

    // BFS
    while (queue.length > 0) {
        if (freshCount === 0) return levelCount; // base case

        let tmp = [];
        for (let [j, i] of queue) {
            for (let [dj, di] of dir) {
                const [newJ, newI] = [j + dj, i + di];
                // check boundaries
                if (newJ < 0 || newI < 0 || newJ >= m || newI >= n) continue;
                let cell = grid[newJ][newI];
                if (cell !== 1) continue; // ignore othen than fresh
                grid[newJ][newI] = 2 // mark as rotting
                freshCount--;
                tmp.push([newJ, newI]);
            }
        }

        levelCount++
        queue = tmp;
    }

    return freshCount === 0 ? levelCount : -1;
}; // T:O(M*N) S:O(M*N)