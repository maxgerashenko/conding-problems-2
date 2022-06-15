// https://www.educative.io/courses/grokking-the-coding-interview/RLw1Pjk1GQ0
// Find all Duplicate Numbers

const find_all_duplicates = function(nums) {
  // Find all duplicates numbers
  //
  // iterate array
  // use cyclic sort
  // iterate and get all
  // numbers in work position

  let i = 0;
  while (i < nums.length) {
    // base case,
    if (nums[i] === i + 1) {
      // number match index
      i++;
      continue;
    }

    let j = nums[i] - 1; // next index
    if (nums[i] !== nums[j]) {
      // next inedex is vacant
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
      continue;
    }

    i++;
  }

  // find duplicate
  let duplicates = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      duplicates.push(nums[i]);
    }
  }

  return duplicates;
}; // T:O(N+N-1)+O(N) S:O(1)
