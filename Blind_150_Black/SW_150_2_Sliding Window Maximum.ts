// https://leetcode.com/problems/sliding-window-maximum/
// Sliding Window Maximum

// use sw
// use monotolicaly decreasing order for the MAX
// fix when el > last, remove all while
// add el
// init window
// clean first when it is out of the window
// do NOT extract but peek to result
// T:O(N) S:O(K)

function maxSlidingWindow(nums: number[], k: number): number[] {
  let monotoIndex = [];
  let n = nums.length;
  let res = [];

  for (let right = 0; right < n; right++) {
    while (
      monotoIndex.length &&
      nums[right] > nums[monotoIndex[monotoIndex.length - 1]]
    )
      monotoIndex.pop();
    // fix monotolicaly decreasing

    monotoIndex.push(right); // add index

    if (right < k - 1) continue; // init

    if (monotoIndex[0] < right - k - 1) monotoIndex.shift(); // clear the window
    res.push(nums[monotoIndex[0]]); // save
  }

  return res;
} // T:O(n) S:O(k)
