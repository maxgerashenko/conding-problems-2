// https://www.educative.io/courses/grokking-the-coding-interview/N7VMDGgr9Vm
//
// Two Single Numbers

// XOR is the difference
// 2 nums always have 1 bit diff
// nums of one group will have common diff

function find_single_numbers(nums, num1 = 0, num2 = 0) {
  let sum = nums.reduce((pre, cur) => (pre ^= cur), 0);
  if (sum === 0) return [-1, -1];
  let diff = 1;
  while (sum & (diff === 0)) diff <<= 1;
  for (let num of nums) {
    if ((num & diff) === 0) {
      num1 ^= num;
      continue;
    }
    num2 ^= num;
  }
  return [num1, num2];
} // T:O(N) S:O(1)
