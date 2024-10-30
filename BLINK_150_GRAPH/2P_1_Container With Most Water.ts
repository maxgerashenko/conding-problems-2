// https://leetcode.com/problems/container-with-most-water/
//
// Container With Most Water

function maxArea(height: number[]): number {
    let start = 0;
    let end = height.length - 1;
    let maxArea = 0;

    while (start < end) {
        // Calculate the area with the current pointers
        const area = Math.min(height[start], height[end]) * (end - start);
        maxArea = Math.max(maxArea, area);

        // Move the pointer with the smaller height
        if (height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }

    return maxArea;
} // T:O(N) S:O(1)