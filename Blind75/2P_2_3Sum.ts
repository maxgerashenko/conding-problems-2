// https://leetcode.com/problems/3sum/description/

// sort array !!!
// use 2 cycles
// move left --> if too small
// move <---right if too big

const threeSum = function (nums, target = 0) {
  const results = [];
  nums.sort((a, b) => a - b); // nums mutation

  for (let first = 0; first < nums.length - 2; first++) {
    if (first > 0 && nums[first - 1] === nums[first]) continue;
    let left = first + 1;
    let right = nums.length - 1;

    while (left < right) {
      if (left - 1 > first && nums[left - 1] === nums[left]) {
        left++;
        continue;
      }
      if (nums[right + 1] === nums[right]) {
        right--;
        continue;
      }
      const value = nums[first] + nums[left] + nums[right];
      if (value === target) {
        results.push([nums[first], nums[left], nums[right]]);
        left++;
        right--;
        continue;
      }
      if (value < target) {
        left++;
        continue;
      }
      right--; // value > target
    }
  }
  return results;
};

// T:O(nlon * n) O(n^2) S:O(n)
