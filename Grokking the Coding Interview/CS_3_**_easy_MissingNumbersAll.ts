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
  for (let i = 0; i < nums.length; i++) {
    let index = nums[i] - 1;
    while (i != index && nums[i] != nums[index]) {
      index = nums[i] - 1;
      [nums[i], nums[index]] = [nums[index], nums[i]];
    }
  }
  for (let i = 0; i < nums.length; i++)
    if (nums[i] != i + 1) results.push(i + 1);
  return results;
}; // T:O(N) S:O(1)
