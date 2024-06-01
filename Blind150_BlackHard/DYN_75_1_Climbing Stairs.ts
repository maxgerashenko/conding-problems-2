// Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/description/

// Like fibonachi

function climbStairs(n: number): number {
    if (n < 3) return n;
    let cur = 2;
    let pre = 1;
    for (let i = 2; i < n; i++) {
        let tmp = cur;
        cur += pre;
        pre = tmp;
    }
    return cur;
}; // T:O(n) S:(1);
