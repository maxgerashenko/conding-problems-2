// https://leetcode.com/problems/product-of-array-except-self/
//
// Product of Array Except Self

function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const res = Array(n).fill(1);

    let pre = 1;
    for (let i = 0; i < n; i++) {
        res[i] *= pre;
        pre *= nums[i];
    }

    let post = 1;
    for (let i = n-1; i >= 0; i--) {
        res[i] *= post;
        post *= nums[i];
    }

    return res;
}; // T:O(n) S:O(n)