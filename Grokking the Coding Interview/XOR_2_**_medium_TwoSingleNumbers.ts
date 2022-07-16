// https://www.educative.io/courses/grokking-the-coding-interview/N7VMDGgr9Vm
//
// Two Single Numbers

// XOR is the difference
// 2 nums always have 1 bit diff
// nums of one group will have common diff

function find_single_numbers(nums, xor = 0, diff = 1, first = 0, second = 0) {
  xor = nums.reduce((pre, el) => pre ^ el, 0);
  if (xor === 0) return [-1, -1]; // catch error
  while ((xor & diff) === 0) diff <<= 1;

  for (let el of nums) {
    first = (el & diff) === 0 ? first ^ el : first;
    second = (el & diff) === 0 ? second : second ^ el;
  }
  return [first, second];
} // T:O(N) S:O(1)
