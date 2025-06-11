// Missing Number
// https://leetcode.com/problems/missing-number/

// use XOR 2 times

function missingNumber(nums: number[]): number {
  let n = nums.length;
  // let res = n*(1+n)/2;
  let res = 0;
  for (let i = 1; i < n + 1; i++) {
    res ^= i;
  }
  for (let el of nums) {
    res ^= el;
  }
  return res;
} // T:O(2n) S:O(1)

// theoretcal sum - curr sum;

// function missingNumber(nums: number[]): number {
//     let n = nums.length;
//     let res = n*(1+n)/2; // sum
//     for(let el of nums) {
//         res-= el;
//     }
//     return res;
// }; // T:O(n) S:O(1)
