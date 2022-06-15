// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/
// Remove Duplicates from Sorted Array II

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  //     Constraints
  //     1 <= nums.length
  //     - <= nums[i] <= +
  //     dublicates in a row
  //     soreted in ascending order

  //     Algorithm
  //     use 2 pointers slow and fast
  //     the fast should scan the elements
  //     slow is for the replacing in the place
  //     use counter for duplicates

  // the array is sorted

  let fast = 0,
    slow = 0,
    count = 0;

  while (fast < nums.length) {
    // if there is a dublicate
    count =
      nums[fast] === nums[fast - 1]
        ? // incriment the count
          count + 1
        : // reset the count
          0;

    if (count > 1) {
      fast++;
      continue;
    }

    nums[slow] = nums[fast];
    slow++;
    fast++;
  }

  // return slow
  return slow;
}; // O(n)
