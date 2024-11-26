// https://leetcode.com/problems/number-of-islands/description/
// 
// Number of Islands


// Union Find
function numIslands(grid: string[][]): number {
    if (!grid || grid.length === 0) return 0;

    const [rows, cols] = [grid.length, grid[0].length];
    const root: number[] = Array(rows * cols).fill(0).map((_, idx) => idx);
    const directions: number[][] = [
        [0, 1],  // Right
        [1, 0]   // Down
    ];
    let count: number = 0; // Number of islands

    function find(x: number): number {
        let parent = x;
        while (root[parent] !== parent) parent = root[parent];

        let cur = x;
        while (cur !== parent) {
            const temp = root[cur];
            root[cur] = parent;
            cur = temp;
        } // Path Compression: Flatten the structure

        return parent;
    }

    function union(a: number, b: number): void {
        const [rootA, rootB] = [find(a), find(b)];

        if (rootA === rootB) return; // Already in the same set

        root[rootA] = rootB; // Merge the sets
        count--; // Two separate islands have merged into one
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === '0') continue;
            count++; // init count

            for (const [dRow, dCol] of directions) {
                const [newRow, newCol] = [row + dRow, col + dCol];
                if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) continue;
                if (grid[newRow][newCol] === '0') continue;

                union(row * cols + col, newRow * cols + newCol);
            }
        }
    }

    return count;
}; // Time: O(N*M * α(N*M)), Space: O(N*M)

// BFS
function numIslands(grid: string[][]): number {
    if (!grid || grid.length === 0) return 0;
    const [rows, cols] = [grid.length, grid[0].length];
    let islandCount = 0;
    const dir = [[1, 0], [0, 1], [-1, 0], [0, -1]];

    function bfs(sRow, sCol): void {
        let level = [[sRow, sCol]];
        grid[sRow][sCol] = '0'; // Mark as visited

        while (level.length > 0) {
            let tmp = [];
            for (let [row, col] of level) {
                for (const [dRow, dCol] of dir) {
                    const [newRow, newCol] = [row + dRow, col + dCol]

                    if (newRow < 0 || newCol < 0 || newRow >= rows || newCol >= cols) continue; // Check boundaries
                    if (grid[newRow][newCol] === '0') continue; // is visted

                    tmp.push([newRow, newCol]);
                    grid[newRow][newCol] = '0';  // Mark as visited
                }
            }
            level = tmp;
        }
    }

    // Iterate through each cell in the grid
    for (let row: number = 0; row < rows; row++) {
        for (let col: number = 0; col < cols; col++) {
            if (grid[row][col] === '0') continue; // is visited check

            bfs(row, col);
            islandCount++;
        }
    }

    return islandCount;
}// T:O(m*n) S:O(m*n)

// // DFS pre order
function numIslands(grid: string[][]): number {
    if (!grid || grid.length === 0) return 0; // error case

    let lenJ = grid.length;
    let lenI = grid[0].length;
    let resCount = 0;
    const dir = [[1, 0], [0, 1], [-1, 0], [0, -1]];

    function dfs([j, i]) {
        if (grid[j][i] === '0') return; // visited
        grid[j][i] = '0'; // mark as visited

        for (let [dJ, dI] of dir) {
            let [newJ, newI] = [j + dJ, i + dI];
            if (newJ < 0 || newI < 0 || newJ >= lenJ || newI >= lenI) continue; // dimentions
            dfs([newJ, newI]);
        }
    }

    for (let j = 0; j < lenJ; j++)
        for (let i = 0; i < lenI; i++) {
            if (grid[j][i] === '0') continue;
            dfs([j, i]);
            resCount++;
        }

    return resCount;
}; // T:O(m*n) S:O(m*n)
