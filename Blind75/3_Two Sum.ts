/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  const results = [];
  for (let i = 0; i < nums.length; i++) {
    const el = parseInt(nums[i]);
    if (map.has(el)) {
      results.push(map.get(el), i);
      continue;
    }

    map.set(target - el, i);
  }

  return results;
};

// O(n) S(n)
