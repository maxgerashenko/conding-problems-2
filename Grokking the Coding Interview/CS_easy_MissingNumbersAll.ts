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
const find_missing_numbers = function (nums) {
  if (nums.length === 0) return [];

  let i = 0;
  while (i < nums.length) {
    let j = nums[i] - 1;
    while (i < nums.length && nums[i] !== nums[j]) {
      // swap
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j = nums[i] - 1;
    }

    i++;
  }

  const missingNumbers = [];
  for (let i in nums) {
    if (nums[i] !== Number(i) + 1) {
      missingNumbers.push(Number(i) + 1);
    }
  }

  return missingNumbers;
}; // T:O(N-1 + N-1) S:O(N)
