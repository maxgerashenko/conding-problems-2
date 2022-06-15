// https://www.educative.io/courses/grokking-the-coding-interview/B8qXVqVwDKY
// Cyclic sort

const cyclic_sort = function(nums) {
  // Cyclic sort

  // iterate
  // If it is in place, 2 = 2 = 2
  // If it is not swap

  // conner case
  if (nums.length < 2) return nums;

  let i = 0;
  while (i < nums.length) {
    let val = nums[i];

    // base case
    if (val === nums[val - 1]) {
      i++;
      continue;
    }

    [nums[i], nums[val - 1]] = [nums[val - 1], nums[i]];
  }
}; // T:O(N + N-1) S:O(1)
// when swap we don't move

const cyclic_sort = function(nums) {
  // Sort array with Cyclic sort
  //
  // iterate array
  // replace while elems when 2 = 2 = 2, update i=j
  // return array

  // iterate array
  let i = 0;
  while (i < nums.length) {
    // base case
    let j = nums[i] - 1;
    while (nums[i] !== nums[j]) {
      j = nums[i] - 1;
      // swap
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // iterate
    i++;
  }

  // return
  return nums;
}; // T:O(N + N-1) S:O(1)

const cyclic_sort = function(nums) {
  // Sort array with Cyclic sort
  //
  // iterate array
  // replace while elems when 2 = 2 = 2, update i=j
  // return array

  // iterate array
  let i = 0;
  while (i < nums.length) {
    let j = nums[i] - 1;
    while (nums[i] !== nums[j]) {
      // swap
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i = j;
    }
    i++;
  }

  // return
  return nums;
}; // T:O(N + N-1) S:O(1)
