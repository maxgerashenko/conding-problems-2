// https://www.educative.io/courses/grokking-the-coding-interview/N7VMDGgr9Vm
//
// Two Single Numbers

// XOR is the difference
// 2 nums always have 1 bit diff
// nums of one group will have common diff

function find_single_numbers(nums, diff = 1) {
  let xor = nums.reduce((pre, el) => (pre ^= el), 0);
  if (xor === 0) return [-1, -1];
  while ((diff & xor) === 0) diff <<= 1;
  return [
    nums.reduce((pre, el) => (el & diff ? pre ^ el : pre), 0),
    nums.reduce((pre, el) => (el & diff ? pre : pre ^ el), 0),
  ];
} // T:O(N) S:(1)
