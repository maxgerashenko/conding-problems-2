function fourSum(nums: number[], target: number): number[][] {
  let len = nums.length;
  if (len < 4) return [];
  const res = [];
  nums.sort((a, b) => a - b);
  for (let l1 = 0; l1 < len; l1++) {
    // if (l1 > 0 && nums[l1 - 1] === nums[l1]) continue;
    for (let l2 = l1 + 1; l2 < len; l2++) {
      let left = l2 + 1;
      let right = len - 1;
      let sum = l1 + l2;
      while (left < right) {
        let sum2 = nums[left] + nums[right];
        if (sum + sum2 === target) {
          res.push([nums[l1], nums[l2], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
          continue;
        }
        if (sum + sum2 < target) {
          left++;
          continue;
        }
        right--;
      }
      while (nums[l2] === nums[l2 + 1]) l2++;
    }
  }
}
