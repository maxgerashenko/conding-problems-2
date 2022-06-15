// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/
// Remove Duplicates from Sorted Array II

var removeDuplicates = function(nums) {
  // Constraints
  // 1 <= nums.length
  // nums is sorted in ascending order

  // Algorithm
  // Use two pointers
  // If there are duplicates numbers in a row
  // move the second index forward
  // copy value from the second index to the first one

  //     1,1,1,2,2,3
  // s 0 1 2 2 3 4 5
  // f 0 1 2 3 4 5 6
  // c 0 0 1 2 0 1 0

  // r   1 1 2 2 3 3

  if (nums.length < 3) return nums.length;

  // define pointers
  let fast = 0,
    slow = 0,
    count = 0;
  while (fast < nums.length) {
    // check previous
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast];
      count = 0;
      fast++;
      slow++;
      continue;
    }

    if (count < 1) {
      nums[slow] = nums[fast];
      count++;
      fast++;
      slow++;
      continue;
    }

    fast++;
  }

  // return value
  return slow;
};

// Python
// class Solution:
//     def removeDuplicates(self, nums: List[int]) -> int:
//         if len(nums) < 3: return len(nums);

//         slow = 2
//         for fast in range(2, len(nums)):
//             if nums[slow-2] != nums[fast]:
//                 nums[slow] = nums[fast]
//                 slow += 1
//                 continue

//             fast += 1

//         return slow
