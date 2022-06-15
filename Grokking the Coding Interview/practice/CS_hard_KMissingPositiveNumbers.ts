// https://www.educative.io/courses/grokking-the-coding-interview/q2LA7G0ANX0
// Find the First K Missing Positive Numbers

// Given an unsorted array containing numbers and a number ‘k’, find the first ‘k’ missing positive numbers in the array.

const find_first_k_missing_positive = function(nums, k) {
  // Find first K missing poitive numbers
  //
  // iterate array
  // if not 2=2=2 [i] != [[i]-1]
  // swap [i,j]=[j,i]
  // remember if [i] > length
  //
  // iterate
  // find [i] !== i+1 and >0 and not it ther set

  // conner case
  if (nums.length === 0) return [];

  let offset = new Set();
  for (let i in nums) {
    let j = nums[i] - 1;
    while (nums[i] !== nums[j] && nums[i] > 0 && nums[i] <= nums.length) {
      // swap
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j = nums[i] - 1;
    }

    if (nums[i] > nums.length) {
      offset.add(nums[i]);
    }
  }

  let missingNumber = [];
  let i = 0;
  while (k > 0) {
    if (nums[i] !== Number(i) + 1 && !offset.has(Number(i) + 1)) {
      missingNumber.push(Number(i) + 1);
      k--;
    }
    i++;
  }

  return missingNumber;
}; //T:O(N) S:O(N)
