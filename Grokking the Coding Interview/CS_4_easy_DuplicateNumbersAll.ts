// https://www.educative.io/courses/grokking-the-coding-interview/RLw1Pjk1GQ0
// Find all Duplicate Numbers

// Find all duplicates numbers
//
// iterate array
// use cyclic sort
// iterate and get all
// numbers in work position
function find_all_duplicates(nums) {
  const result = [];
  for (let i in nums) {
    while (nums[i] !== +i + 1) {
      let val = nums[i];
      if (nums[val - 1] === val) {
        result.push(val);
        break;
      }
      [nums[i], nums[val - 1]] = [nums[val - 1], nums[i]];
    }
  }

  return result;
} // T:O(n+n-1) S:O(1)
