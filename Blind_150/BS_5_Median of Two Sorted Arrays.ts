// https://leetcode.com/problems/median-of-two-sorted-arrays/
// Median of Two Sorted Arrays

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let total = nums1.length + nums2.length;
  let half = ~~(total / 2);

  if (nums2.length < nums1.length) {
    [nums2, nums1] = [nums1, nums2];
  }

  let left = 0;
  let right = nums1.length - 1;

  console.log(total, half, nums1.length < nums2.length, left, right);

  while (true) {
    let pivot1 = Math.floor(right / 2 + left / 2);
    let pivot2 = half - 1 - pivot1 - 1;
    let elPivot1 = pivot1 < 0 ? -Infinity : nums1[pivot1];
    let elPivot1Next =
      pivot1 + 1 >= nums1.length ? Infinity : nums1[pivot1 + 1];
    let elPivot2 = pivot2 < 0 ? -Infinity : nums2[pivot2];
    let elPivot2Next =
      pivot2 + 1 >= nums2.length ? Infinity : nums2[pivot2 + 1];

    console.log(pivot1, pivot2, elPivot1, elPivot1Next, elPivot2, elPivot2Next);

    if (elPivot1 <= elPivot2Next && elPivot2 <= elPivot1Next) {
      if (total % 2 === 1) return Math.min(elPivot1Next, elPivot2Next);
      return (
        Math.max(elPivot1, elPivot2) / 2 +
        Math.min(elPivot1Next, elPivot2Next) / 2
      );
    }
    if (elPivot1 > elPivot2Next) {
      right = pivot1 - 1;
      continue;
    }
    left = pivot1 + 1;
  }
  return 1;
} // T:O(log(Min(N1,N2))) S:O(n+m)
