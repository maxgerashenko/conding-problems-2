// https://leetcode.com/problems/climbing-stairs/
//
// Climbing Stairs

// Distinkt ways
//
// ways accumulates
//
// Start Index = 0, value = 1

function climbStairs(n: number): number {
    let pre = 0; // before start 0 ways
    let cur = 1; // 0 Steps 1 ways

    for (let i = 0; i < n; i++) {
        let tmp = cur;
        cur = cur + pre;
        pre = tmp;
    }

    return cur;
}; // T:O(n) S:O(1)