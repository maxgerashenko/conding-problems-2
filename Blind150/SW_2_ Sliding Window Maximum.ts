// Sliding Window Maximum
// https://leetcode.com/problems/sliding-window-maximum/

// left right
// monotiniq decreasing Queue
// add new to the end of the Queue
// remove first if queue start < left
// if right >= k add queue start to the result
// and incrase left++
// increase right;

function maxSlidingWindow(nums: number[], k: number): number[] {
  let n = nums.length;
  let queueIndex = []; // queue structure
  let res = [];

  for (let index = 0; index < n; index++) {
    while (
      queueIndex.length &&
      nums[queueIndex[queueIndex.length - 1]] < nums[index]
    )
      queueIndex.pop();
    queueIndex.push(index);

    if (index < k - 1) continue;

    if (queueIndex[0] <= index - k) queueIndex.shift();
    res.push(nums[queueIndex[0]]);
  }

  return res;
} // T:O(n) S:O(k)
