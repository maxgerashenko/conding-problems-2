// Trapping Rain Water
// https://leetcode.com/problems/trapping-rain-water/

function trap(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];
  let res = 0;

  while (left < right) {
    if (height[left] <= height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      let val = leftMax - height[left];
      res += val > 0 ? val : 0;
      left++;
      continue;
    }
    rightMax = Math.max(rightMax, height[right]);
    let val = rightMax - height[right];
    res += val > 0 ? val : 0;
    right--;
    continue;
  }

  return res;
} // T:O(n) S:O(1)
