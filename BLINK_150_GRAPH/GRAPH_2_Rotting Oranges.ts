// https://leetcode.com/problems/rotting-oranges/
// 
// Rotting Oranges


// BFS
function orangesRotting(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    let freshCount = 0;
    let queue: [number, number][] = [];
    let minutes = 0;
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];

    // Initialize the queue with all the rotten oranges and count fresh oranges
    for (let j = 0; j < m; j++) {
        for (let i = 0; i < n; i++) {
            if (grid[j][i] === 2) {
                queue.push([j, i]);
            } else if (grid[j][i] === 1) {
                freshCount++;
            }
        }
    }

    // If there are no fresh or rotten oranges, return 0
    if (freshCount === 0) return 0;

    // BFS to spread the rot
    while (queue.length > 0) {
        let newQueue: [number, number][] = [];

        for (let [j, i] of queue) {
            for (let [dJ, dI] of directions) {
                const newJ = j + dJ;
                const newI = i + dI;

                // Check if the position is within bounds and the orange is fresh
                if (newJ >= 0 && newI >= 0 && newJ < m && newI < n && grid[newJ][newI] === 1) {
                    grid[newJ][newI] = 2; // Mark the orange as rotten
                    freshCount--;
                    newQueue.push([newJ, newI]);
                }
            }
        }

        // If newQueue is not empty, increase the time
        if (newQueue.length > 0) minutes++;
        queue = newQueue;
    }

    // If there are still fresh oranges, return -1
    return freshCount === 0 ? minutes : -1;
} // T:O(N*N) S:O(N*M)