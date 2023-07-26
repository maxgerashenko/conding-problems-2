// https://leetcode.com/problems/partition-equal-subset-sum/
// Partition Equal Subset Sum

// use DP
// use set instead of array
// use add number && not add number
// use sum and reversed order instead of tree
//
// bruteForce 2^N
// T:O(2N*sum(nums))
// 2N is sum + interate

function canPartition(nums: number[]): boolean {
  let dp = new Set([0]); // initila value + not included case
  const sum = nums.reduce((pre, el) => pre + el, 0);
  if (sum % 2) return false; // if odd not posible
  const target = sum / 2;

  for (let i = nums.length - 1; i >= 0; i--) {
    let num = nums[i];
    let tmp = new Set(dp);
    tmp.add(num);
    for (let el of dp) {
      if (num === target) return true;
      tmp.add(num + el); // num + 0 included
    }
    dp = tmp;
  }

  return dp.has(target);
} // T:O(2N*sum(nums)) S:O(N)
