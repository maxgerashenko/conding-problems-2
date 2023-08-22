// https://leetcode.com/problems/median-of-two-sorted-arrays/submissions/
// Median of Two Sorted Arrays

// use BS for the min array
// 111 x 111 || 111 x 111
// find the half of the merged array
// find the i1 + j2 = halfIndex
// use BS to find i1 in the min array
// j2 = half-1-i1-1
// find all all on the left half of merged array
// check is it a half left1 < right2 && left2 < right1
// return if 111 x 111(even) Max(i1, j2)/2 + Min(i1+1, j2+1)/2;
// reutrn if 111 x 1 x 111(odd) Min(i1+1, j2+1);
// T:O(min(n,m)) S:O(n+m)

// mistakes  Math.floor() NOT ~~() doesn't work for negative
// j2 = half - 2 - i1 - 1, half is count not index and i1 is index not count
// (n+m)%2 !==== n%2 + m%2
// min = [min, max] = [max, min] // replace

var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  } // 1st should be shortest
  let n = nums1.length;
  let m = nums2.length;
  let isEven = (n + m) % 2 === 0;
  let half = ~~(n / 2 + m / 2); // not depends on
  let left = 0;
  let right = n - 1;

  while (true) {
    let pivot1 = Math.floor(left / 2 + right / 2); // left of it
    let pivot2 = half - 1 - pivot1 - 1;

    let pre1 = nums1[pivot1] ?? -Infinity;
    let post1 = nums1[pivot1 + 1] ?? Infinity;
    let pre2 = nums2[pivot2] ?? -Infinity;
    let post2 = nums2[pivot2 + 1] ?? Infinity;

    if (pre1 <= post2 && pre2 <= post1) {
      return isEven
        ? Math.max(pre1, pre2) / 2 + Math.min(post1, post2) / 2
        : Math.min(post1, post2);
    }

    if (pre1 > post2) {
      right = pivot1 - 1;
      continue;
    }
    left = pivot1 + 1;
  }
}; // T:(log(min(len(m,m))))
