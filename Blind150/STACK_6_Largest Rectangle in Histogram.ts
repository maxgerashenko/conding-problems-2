// Largest Rectangle in Histogram
// https://leetcode.com/problems/largest-rectangle-in-histogram/

// use stack
// use cur index
// add to the stack whe monotonicaly increaseing order with cur index
// when decrease update cur and max to last 

function largestRectangleArea(heights: number[]): number {
  let stack = [];
  let max = 0;

  for (let i = 0; i < heights.length; i++) {
    let start = i;
    let el = heights[i];
    while (stack.length > 0 && stack.slice(-1)[0].val > el) {
      let { index, val } = stack.pop();
      max = Math.max(max, val * (i - index));
      start = index;
    } // when is decreasing, i === const

    stack.push({ index: start, val: el });
  } // middle elements in array

  while (stack.length > 0) {
    let { index, val } = stack.pop();
    max = Math.max(max, val * (heights.length - index));
  } // last element in array

  return max;
} // T:O(n) S:O(N)
