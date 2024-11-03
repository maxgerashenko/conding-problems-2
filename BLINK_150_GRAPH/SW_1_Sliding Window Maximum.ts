// https://leetcode.com/problems/sliding-window-maximum/
// 
// Sliding Window Maximum

function maxSlidingWindow(nums: number[], k: number): number[] {
    const dequeIndex = [];
    let n = nums.length;
    const res = [];

    for (let i = 0; i < n; i++) {
        while (dequeIndex.length && nums[i] >= nums[dequeIndex[dequeIndex.length - 1]])  dequeIndex.pop();
        dequeIndex.push(i);

        if (i + 1 < k) continue; // window is not initialize
        while (dequeIndex[0] < i + 1 - k) dequeIndex.shift();
        res.push(nums[dequeIndex[0]]);
    }

    return res;
}; // T:O(n*k) S:O(k)