// https://www.educative.io/courses/grokking-the-coding-interview/3jEXWgB5ZmM
// Missing Positive Number

function find_first_smallest_missing_positive(nums) {
  // find smallest missing positive number
  //
  // iterate array
  // use cs, when not 2=2=2, [i]>0
  // swap [i,j] = [j,i]
  // if i != i+1 and i>0 return i+1

  // conner case
  if (nums.length === 0) return -1;

  for (let i in nums) {
    let j = nums[i] - 1;
    while (nums[i] > 0 && nums[i] !== nums[j] && nums[i] <= nums.length) {
      // swap
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j = nums[i] - 1;
    }
  }

  for (let i in nums) {
    if (nums[i] !== Number(i) + 1) {
      return Number(i) + 1;
    }
  }
} // T:O(N+N) S:O(1)
