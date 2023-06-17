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
  let maxQueue = [];
  let res = [];
  let right = 0;
  let left = 0;

  while (right < nums.length) {
    // don't add new element if prev is smaller, remove them
    while (maxQueue.length > 0 && nums[maxQueue.slice(-1)[0]] <= nums[right]) {
      maxQueue.pop();
    }
    maxQueue.push(right);

    if (left > maxQueue[0]) {
      maxQueue.shift();
    }

    // k4 === index3
    if (right + 1 >= k) {
      // add and remove current max
      res.push(nums[maxQueue[0]]);
      left++;
    }
    right++;
  }

  return res;
} // T:O(N) S:O(N)
