function fourSum(
  nums: number[],
  target: number,
  len = nums.length
): number[][] {
  let res = [];
  nums.sort((a, b) => a - b);

  for (let L1 = 0; L1 < len - 3; L1++) {
    for (let L2 = L1 + 1; L2 < len - 2; L2++) {
      let rest = nums[L1] + nums[L2] - target;
      let left = L2 + 1;
      let right = len - 1;
      while (left < right) {
        let sum2 = nums[left] + nums[right];
        if (sum2 + rest === 0) {
          console.log([nums[L1], nums[L2], nums[left], nums[right]]);
          res.push([nums[L1], nums[L2], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          console.log([nums[L1], nums[L2], nums[left], nums[right]]);
          left++;
          right--;
          continue;
        }
        if (sum2 + rest < 0) {
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
} // T:O(N^3) S:O(1), expect O(n)
