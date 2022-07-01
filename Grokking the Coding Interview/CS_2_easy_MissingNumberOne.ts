// https://www.educative.io/courses/grokking-the-coding-interview/JPnp17NYXE9
// Find the Missing Number

const find_missing_number = function (nums) {
  let missVal = -1;
  for (let n in nums) {
    while (nums[n] !== +n + 1 && nums[n] !== 0) {
      let nextValue = nums[n];
      [nums[n], nums[nextValue - 1]] = [nums[nextValue - 1], nums[n]];
    }
    if (nums[n] === 0) {
      missVal = +n + 1;
    }
  }
  return missVal;
}; // T:O(n+n-1) S:O(1)
