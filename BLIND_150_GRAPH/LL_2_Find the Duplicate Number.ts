// https://leetcode.com/problems/find-the-duplicate-number/
//
// Find the Duplicate Number

// Floyd’s Cycle Detection
// Fast and Slow
// Meeting point
// start +1 and meeting + 1
// when start === meeting, new meeting  === duplicate

function findDuplicate(nums: number[]): number {
    let slow = nums[0];
    let fast = nums[0];

    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        if (slow === fast) break
    }

    let start = nums[0];
    while (start !== slow) {
        start = nums[start]; // Move start by 1 step
        slow = nums[slow]; // Move slow by 1 step
    }

    return start; // start of the cycle
}// T:O(n) S:O(1)