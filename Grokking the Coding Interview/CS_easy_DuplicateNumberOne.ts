// https://www.educative.io/courses/grokking-the-coding-interview/3wEkKy6Pr9A
// Find the Duplicate Number

const find_duplicate = function (nums) {
  // Find a duplicate number
  //
  // iterate array
  // swap when [i] != [i]-1 2=2=2
  // if [i] !== i+1 it is a duplicate
  // return fist duplicate

  // conner case
  if (nums.length < 2) return -1;

  let i = 0;
  while (i < nums.length) {
    let j = nums[i] - 1;
    while (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j = nums[i] - 1;
    }

    // find first duplicate
    if (nums[i] !== i + 1) return nums[i];

    i++;
  }

  return -1;
}; // T:O(N) S:O(1)
