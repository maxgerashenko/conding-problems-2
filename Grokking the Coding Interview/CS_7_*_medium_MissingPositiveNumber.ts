// https://www.educative.io/courses/grokking-the-coding-interview/3jEXWgB5ZmM
// Missing Positive Number

// find smallest missing positive number
//
// iterate array
// use cs, when not 2=2=2, [i]>0
// swap [i,j] = [j,i]
// if i != i+1 and i>0 return i+1

// conner case
const find_first_smallest_missing_positive = function (nums) {
  for (let i = 0; i < nums.length; i++)
    while (nums[i] != null && nums[i] >= 0 && nums[i] != i) {
      let val = nums[i];
      [nums[i], nums[val]] = [nums[val], nums[i]];
    }
  for (let i = 0; i < nums.length; i++) if (i > 0 && i != nums[i]) return i;
  return -1;
}; // T:O(N) S:O(1)
