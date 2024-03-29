// Two Sum II
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

// if sum === target, left++, right--;
// T:O(N) S:O(1)

function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    if (sum < target) {
      left++;
      continue;
    }
    right--;
  }

  return [];
} // T:O(n) S:O(1);
