// https://www.educative.io/courses/grokking-the-coding-interview/N7VMDGgr9Vm
//
// Two Single Numbers

// XOR is the difference
// 5 XOR 5 === 0 no diffrence
// & diffrence in bit
// 5 & 1 === 0 no diffrence in bit
// 4 & 1 !== 0 has idffrence in bit
// 2 diffrent numbres has at least 1 bit differentce
// Find numbers and ignore the other with XOR

function find_single_numbers(nums) {
  let xor = nums.reduce((pre, cur) => (pre ^= cur), 0);
  if (xor === 0) return [-1, -1];

  let diffBit = 1;
  while ((xor & diffBit) === 0) {
    diffBit *= 2; // bit << 1
  }

  let n1 = 0;
  let n2 = 0;
  for (let num of nums) {
    if (num & diffBit) {
      n1 ^= num; // 1 ^ 1 === 0
      continue;
    }
    n2 ^= num; // 1 ^ 1 === 0
  }

  return [n1, n2];
} // T:O(n) S:O(1);
