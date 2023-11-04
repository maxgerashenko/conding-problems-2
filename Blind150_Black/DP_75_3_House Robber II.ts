// https://leetcode.com/problems/house-robber-ii/
// House Robber II

// DP
// pre cur
// max of pre and cur
// Muturaly exclusive odd even
// max of odd or even
//
// T:O(n) S:(1)

function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0]; // conner case

  function count(nums: number[]) {
    let [pre, cur] = [0, 0];

    for (let el of nums) {
      let tmp = cur;
      cur = Math.max(pre + el, cur);
      pre = tmp;
    }

    return cur;
  }

  return Math.max(count(nums.slice(0, nums.length - 1)), count(nums.slice(1)));
} // T:O(N) S:O(1)
