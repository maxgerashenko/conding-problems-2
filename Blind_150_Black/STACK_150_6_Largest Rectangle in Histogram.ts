// https://leetcode.com/problems/largest-rectangle-in-histogram/submissions/
// Largest Rectangle in Histogram

// use stack
// use monoto inc stack [index, value]
// use right, left
// while rightEl < leftEl
// caluculate max of top stack and pop left
// put right wiht new leftIndex and rightValue
// calculate the rest
// return max

function largestRectangleArea(heights: number[]): number {
  let monoIncStack = [];
  let n = heights.length;
  let max = 0;

  for (let right = 0; right < n; right++) {
    let el = heights[right];

    let newRightIndex = right; // keep low after cut
    while (
      monoIncStack.length &&
      el < monoIncStack[monoIncStack.length - 1][1]
    ) {
      let [leftIndex, leftValue] = monoIncStack.pop();
      max = Math.max(max, (right - 1 - leftIndex + 1) * leftValue);
      newRightIndex = leftIndex;
    }
    monoIncStack.push([newRightIndex, heights[right]]);
  }

  for (let [leftIndex, leftValue] of monoIncStack) {
    max = Math.max(max, leftValue * (n - 1 - leftIndex + 1));
  } // calc rest

  return max;
} // T:O(n) S:O(n)
