// https://www.educative.io/courses/grokking-the-coding-interview/Y52qNM0ljWK
// Find all Missing Numbers

// find duplicates
//
// iterate array,
// swap when [i] != [i]-1, 2=2=2
// iterate array
// add num when [i] != [i-1] 2=2=2
// return missing numbers

// conners case
const find_missing_numbers = function (nums, results = []) {
  for (let i = 0; i < nums.length; i++)
    while (nums[i] != i + 1) {
      let val = nums[i];
      if (nums[i] == null || nums[i] == nums[val - 1]) break;
      [nums[i], nums[val - 1]] = [nums[val - 1], nums[i]];
    }
  for (let i = 0; i < nums.length; i++)
    if (nums[i] != i + 1) results.push(i + 1);
  return results;
}; // T:O(N) S:O(1)
