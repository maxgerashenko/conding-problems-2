// House Robber II
// https://leetcode.com/problems/house-robber-ii/description/

function rob(nums: number[]): number {
    let len = nums.length;

    // conner case
    if (nums.length < 2) return nums[0];

    function help(arr) {
        let pre = 0;
        let cur = arr.shift();

        for (let el of arr) {
            let tmp = cur;
            cur = Math.max(pre + el, cur);
            pre = Math.max(tmp, pre); // remember MAX or Pre
        }

        return Math.max(pre, cur);
    }

    return Math.max(help(nums.slice(0, len - 1)), help(nums.slice(1, len)));
}; // T:O(N) S:(1)