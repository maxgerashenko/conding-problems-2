// https://leetcode.com/problems/n-queens/
//
// N-Queens

// DFS
// Backtraking
// Cols & Rolls
// Positive j-i and Negative j+i diagonals
// return when n = q count
function solveNQueens(n: number): string[][] {
    const results: string[][] = [];

    // Sets to track columns, positive diagonals, and negative diagonals
    const [cols, pDiog, nDiog] = [new Set(), new Set(), new Set()]

    function dfs(row: number, path: string[]) {
        // Base case: if row is equal to n, add a valid path to results
        if (row === n) {
            results.push([...path]);
            return;
        }

        // Try placing a queen in each column of the current row
        for (let col = 0; col < n; col++) {
            const pDiog = row - col;
            const nDiog = row + col;

            // Check if the current position is under attack
            if (cols.has(col) || pDiog.has(pDiog) || nDiog.has(nDiog)) continue;

            // Place the queen and mark the column and diagonals
            cols.add(col);
            pDiog.add(pDiog);
            nDiog.add(nDiog);

            // Build the row string with 'Q' at the col position
            const rowStr = '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1);
            path.push(rowStr);

            // Recursively place queens in the next row
            dfs(row + 1, path);

            // Backtrack: remove the queen and unmark the column and diagonals
            path.pop();
            cols.delete(col);
            pDiog.delete(pDiog);
            nDiog.delete(nDiog);
        }
    }

    dfs(0, []);
    return results;
} // O:T(!N) O:S(N)
