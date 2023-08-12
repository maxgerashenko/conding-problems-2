// Trapping Rain Water
// https://leetcode.com/problems/trapping-rain-water/

// left right, if udpate min of 2 Max
// val += current - minLeftRightMax
// if left <= right left --

function trap(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let maxLeft = height[left];
    let maxRight = height[right];
    let count = 0;

    while(left < right){
        if(maxLeft <= maxRight){
            left++;
            maxLeft = Math.max(maxLeft, height[left]);
            count += maxLeft - height[left];
            continue;
        }
        right--;
        maxRight = Math.max(maxRight, height[right]);
        count += maxRight - height[right];
    }

    return count;
}; // T:O(N) S:O(1)


function trap(height: number[]): number {
  let mostLef = [0];
  let mostRigh = [];
  let len = height.length;
  mostRigh[len - 1] = 0;
  let maxLeft = height[0];
  let maxRight = height[len - 1];
  let res = 0;

  for (let i = 1; i < len; i++) {
    maxLeft = Math.max(maxLeft, height[i]);
    mostLef[i] = maxLeft;
  }

  for (let i = len - 2; i >= 0; i--) {
    mostRigh[i] = maxRight;
    maxRight = Math.max(maxRight, height[i]);
  }

  for (let i = 0; i < height.length; i++) {
    console.log(mostLef[i], mostRigh[i], height[i]);
    let val = Math.min(mostLef[i], mostRigh[i]) - height[i];
    res += val < 0 ? 0 : val;
  }

  return res;
} // T:O(n) S:O(2n)
