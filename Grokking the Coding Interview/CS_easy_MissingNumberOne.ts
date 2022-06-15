// https://www.educative.io/courses/grokking-the-coding-interview/JPnp17NYXE9
// Find the Missing Number

const find_missing_number = function(nums) {
  // Find missing number
  //
  // iterate array
  // use cyclic sort
  // if not 2 = 2 = 2
  // swap [i] and [[i]]
  // iterate array
  // find null
  // return i

  // conner case
  if (nums.legth === 0) return -1;

  // iterate
  for (let i = 0; i < nums.length; i++) {
    let j = nums[i];
    while (nums[i] !== nums[j] && nums[i] != null) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j = nums[i];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i) return i;
  }

  // 0,1,2 missing nunber is 3
  return nums.length;
}; // T:O(N-1+N) S:O(1)
