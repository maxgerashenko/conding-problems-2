function fourSum(nums: number[], target: number): number[][] {
  let len = nums.length;
  let res = [];
  nums.sort((a, b) => a - b);

  for (let L1 = 0; L1 < len - 3; L1++) {
    for (let L2 = L1 + 1; L2 < len - 2; L2++) {
      let left = L2 + 1;
      let right = len - 1;
      while (left < right) {
        let sum = nums[L1] + nums[L2] + nums[left] + nums[right];

        if (sum === target) {
          res.push([nums[L1], nums[L2], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        }
        if (sum < target) {
          left++;
          continue;
        }
        right--;
      }
      while (nums[L2] === nums[L2 + 1]) L2++;
    }
    while (nums[L1] === nums[L1 + 1]) L1++;
  }
  return res;
} // T:O(N^3) S:O(1), except S:O(n^2) result // T:O(N^3) S:O(1), expect O(n^2) for the result

function fourSum(nums: number[], target: number): number[][] {
  let res = [];
  nums.sort((a, b) => a - b);
  let len = nums.length;
  for (let L1 = 0; L1 < len - 3; L1++) {
    for (let L2 = L1 + 1; L2 < len - 2; L2++) {
      for (let L3 = L2 + 1; L3 < len - 1; L3++) {
        let sum = nums[L1] + nums[L2] + nums[L3];
        let match = binarySearch(L3 + 1, target - sum);
        if (match != null)
          res.push([nums[L1], nums[L2], nums[L3], nums[match]]);
        while (nums[L3] === nums[L3 + 1]) L3++;
      }
      while (nums[L2] === nums[L2 + 1]) L2++;
    }
    while (nums[L1] === nums[L1 + 1]) L1++;
  }
  function binarySearch(start, target, end = nums.length - 1) {
    while (start <= end) {
      let pivot = ~~(start / 2 + end / 2); // Like round but works for - value
      if (nums[pivot] === target) return pivot;
      if (nums[pivot] < target) {
        start = pivot + 1; // ~~ 2.5 = 2 <-
        continue;
      }
      end = pivot - 1; // target is on the left side
    }
    return null;
  }

  return res;
} // TO(n^3 * log n) S:O(n^2)
