// https://leetcode.com/problems/two-sum/

// use hashMapToTagetAndIndex
// use key as target - value
// and value as index of that element

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let mapMapToTargetIndex = new Map();
  const results = [];
  for (let index = 0; index < nums.length; index++) {
    const el = parseInt(nums[index]);
    if (mapMapToTargetIndex.has(el)) {
      results.push(mapMapToTargetIndex.get(el), index);
      continue;
    }

    mapMapToTargetIndex.set(target - el, index);
  }

  return results;
};

// O(n) S(n)
