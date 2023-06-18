// https://leetcode.com/problems/daily-temperatures/
// Daily Temperatures

// Basic solution is O:n^2
// find next big for each n*n

// O:(n) solution
// monotilicay decreasing stack
// if smaller the top add to the stack
// if bigger then top remove from the stack
// update there index with index diff
// add bigger value to the stack
// O:(n) S:O(n)
