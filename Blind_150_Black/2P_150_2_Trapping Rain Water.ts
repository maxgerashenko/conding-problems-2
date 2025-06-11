// https://leetcode.com/problems/trapping-rain-water/
// Trapping Rain Water

// use 2P
// start from far left and far right
// set maxLeft and maxRight
// ignore fist interation
// track maxLeft and maxRight
// udpate left++ and right-- when the smallest
// leave maxL or maxR but move left and right
// calculate count for left or right based on max-cur
// udpate max first to avoid negative numbers

function trap(height: number[]): number {
  let n = height.length;
  let left = 0;
  let right = n - 1;
  let count = 0;
  let leftMax = height[0];
  let rightMax = height[right];

  while (left < right) {
    if (leftMax <= rightMax) {
      left++;
      leftMax = Math.max(leftMax, height[left]);
      count += leftMax - height[left];
      continue;
    }

    right--;
    rightMax = Math.max(rightMax, height[right]);
    count += rightMax - height[right];
  }

  return count;
} //T:O(n) S:O(1);
