// https://leetcode.com/problems/search-a-2d-matrix/
// 
// Search a 2D Matrix

function searchMatrix(matrix: number[][], target: number): boolean {
    const m = matrix.length;
    const n = matrix[0].length;
    let left = 0;
    let right = m * n - 1; // index

    while (left <= right) {
        if (target === matrix[Math.floor(left / m)][left % n]) return true;

        const pivot = Math.floor((left + right) / 2); // Calculate pivot
        let val = matrix[Math.floor(pivot / n)][pivot % n];

        if (target < val) {
            right = pivot - 1;
            continue;
        }

        left = pivot + 1;
    }

    return false;
}; // T:O(logN) S:O(N)