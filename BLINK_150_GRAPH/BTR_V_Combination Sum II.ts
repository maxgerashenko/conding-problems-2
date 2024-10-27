// https://leetcode.com/problems/combination-sum-ii/description/
//
// Combination Sum II

// sort number arr to avoid duplicates
// use dfs
// use backtracking for path
// ech number could be added or not added wich gives 2^N
// reduce tager in dfs as number is used
// sip number if it is the same as prev
// if target is 0 add paht to the res array

function combinationSum2(candidates: number[], target: number): number[][] {
    const result: number[][] = [];
    candidates.sort((a, b) => a - b); // Sort to handle duplicates easily

    function dfs(start: number, target: number, path: number[]) {
        if (target === 0) {
            result.push([...path]); // Add a valid combination to the result
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            // Skip duplicates
            if (i > start && candidates[i] === candidates[i - 1]) continue;
            
            // Stop if the current candidate exceeds the target
            if (candidates[i] > target) break;

            // Include the current candidate in the path
            path.push(candidates[i]);
            dfs(i + 1, target - candidates[i], path); // Move to the next index
            path.pop(); // Backtrack
        }
    }

    // Start DFS with an empty path
    dfs(0, target, []);
    return result;
} // T:O(2^N) S:O(N)