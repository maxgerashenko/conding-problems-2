//https://leetcode.com/problems/container-with-most-water/submissions/936536679/

// do one thing, focus on hieght
// compate left and right hieght
// change smaller

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (heights) {
  let left = 0;
  let right = heights.length - 1;
  let maxValue = 0;
  while (left < right) {
    let minHight = Math.min(heights[left], heights[right]);
    let value = minHight * (right - left);
    maxValue = Math.max(maxValue, value);
    if (heights[left] <= heights[right]) {
      left++;
      continue;
    }
    right--;
  }
  return maxValue;
};
