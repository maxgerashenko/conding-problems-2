// https://leetcode.com/problems/4sum-ii/submissions/

var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let count = 0;
  let map = {};
  for (let n1 of nums1) {
    for (let n2 of nums2) {
      let sum = n1 + n2;
      map[sum] = (map[sum] || 0) + 1;
    }
  }

  let sum34 = [];
  for (let n3 of nums3) {
    for (let n4 of nums4) {
      let sum = n3 + n4;
      if (map[-sum] != null) {
        count += map[-sum];
      }
    }
  }

  return count;
}; // T:O(n^2) S:(n^2)
