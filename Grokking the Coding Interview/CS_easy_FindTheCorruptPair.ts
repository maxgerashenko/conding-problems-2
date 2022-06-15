// https://www.educative.io/courses/grokking-the-coding-interview/mE2LVDE3wp0
// Find the Corrupt Pair

const find_corrupt_numbers = function(nums) {
  // Find missing and dublicate pair
  //
  // iterate array
  // when not 2=2=2 swap
  // if [i] !== i+1 return

  // corner case
  if (nums.length < 2) return [];

  let i = 0;
  while (i < nums.length) {
    let j = nums[i] - 1;
    while (nums[i] !== nums[j]) {
      // swap
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j = nums[i] - 1;
    }

    i++;
  }

  for (let i in nums) {
    if (nums[i] !== Number(i) + 1) return [Number(i) + 1, nums[i]];
  }

  return [-1, -1];
}; // T:(N-1 + N) S:(1)
