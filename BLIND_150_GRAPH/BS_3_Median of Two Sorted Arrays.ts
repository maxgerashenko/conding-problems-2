// https://leetcode.com/problems/median-of-two-sorted-arrays/description/
//
// Median of Two Sorted Arrays


// Merge first 
// Use binary search on 1st to find 1st pivit i
// use the half to get j as pivot 2
// check condition to both 1st left < 2 right && 2 left < 2 right
// pivitLeft is the same as pititeRight but 
// pivitLeft === 0 means [] left and [all] right
// pivitLeft === n means [all] left and [] right

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if (nums2.length < nums1.length) {
        [nums1, nums2] = [nums2, nums1];
    } // num1 should be smaller

    let n = nums1.length;
    let m = nums2.length;
    let len = m + n;
    let half = Math.floor(len / 2);

    let left = 0;
    let right = n; // super important for the partion
    while (left <= right) {
        let pivot1 = Math.floor((left + right) / 2);
        let pivot2 = half - pivot1;

        let left1 = pivot1 === 0 ? -Infinity : nums1[pivot1 - 1];
        let right1 = pivot1 === n ? Infinity : nums1[pivot1];
        let left2 = pivot2 === 0 ? - Infinity : nums2[pivot2 - 1];
        let right2 = pivot2 === m ? Infinity : nums2[pivot2];

        if (left1 <= right2 && left2 <= right1)
            return len % 2 === 0
                ? (Math.max(left1, left2) + Math.min(right1, right2)) / 2
                : Math.min(right1, right2);
        if (left1 > right2) {
            right = pivot1 - 1;
            continue;
        }
        left = pivot1 + 1;
    }
}; // T:O(lon(min(m+n))) S:O(1)