// https://leetcode.com/problems/container-with-most-water/
// Container With Most Water

// use 2P
// wall is included to the water width 1-0 = 1
// start for far left and far right
// calculate cur and update the max

function maxArea(height: number[]): number {
  let max = 0;
  let left = 0;
  let n = height.length;
  let right = n - 1;

  while (left < right) {
    let leftHight = height[left];
    let rightHight = height[right];
    let cur = (right - left) * Math.min(leftHight, rightHight);
    max = Math.max(max, cur);
    if (leftHight <= rightHight) {
      left++;
      continue;
    }
    right--;
  }

  return max;
} // T:O(n) S:O(1)
