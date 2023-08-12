//https://leetcode.com/problems/container-with-most-water/submissions/936536679/

// do one thing, focus on hieght
// compate left and right hieght
// change smaller

/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height: number[]): number {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let volume = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, volume);
    if (height[left] <= height[right]) {
      left++;
      continue;
    }
    right--;
  }
  return max;
} // T:O(n) S:O(1)
