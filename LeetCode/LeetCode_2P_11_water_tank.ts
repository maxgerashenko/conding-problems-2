/**
 11. Container With Most Water
Medium


// Share
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let s_max = 0;
    let n = height.length;
    let i = 0, j = n-1;
    
    while(i < j) {
        s_max = Math.max(s_max, (j-i) * Math.min(height[i], height[j]));
        if(height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    
    return s_max;
};