// https://leetcode.com/problems/largest-rectangle-in-histogram/
//
// Largest Rectangle in Histogram

// Stack mono
// {start, height}
// cal the rest
function largestRectangleArea(heights) {
    let max = 0;
    const stack = [];

    for (let i = 0; i < heights.length; i++) {
        let start = i;
        while (
            stack.length > 0 &&
            heights[i] <= stack[stack.length - 1].height
        ) {
            const { index, height } = stack.pop();
            max = Math.max(max, height * (i - index));
            start = index;
        }
        stack.push({ index: start, height: heights[i] });
    }

    for (const { index, height } of stack) {
        max = Math.max(max, height * (heights.length - index));
    }
    return max;
} // T:O(n) S:O(n)