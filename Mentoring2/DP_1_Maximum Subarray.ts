function maxSubArray(nums: number[]): number {
  let max = nums[0];
  let pre = 0;
  for (let i = 0; i < nums.length; i++) {
    let el = nums[i];
    if (pre < 0) {
      pre = el;
    } else {
      pre += el;
    }
    max = Math.max(max, pre);
  }

  return max;
} // T:O(1) S:O(1), exclude input array
