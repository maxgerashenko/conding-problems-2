// https://leetcode.com/problems/find-the-duplicate-number/
// Find the Duplicate Number

// use LL
// can't use hash map
// list has cycle
// find the start of the cycle
// 1 find meeting point with fast and slow
// 2 set one to start another to meeting pont
// 3 when values are ===, it is start of the cycle
// it is the answer
// T:O(n) S:O(1)

// Proof P + C - X + X === elements + circle
// 2 Slow = Fast
// 2P + 2C = P + C + C + X
// 2P + 2C = P + 2C + X
// P + 2C = 2C + X
// P = X

function findDuplicate(nums: number[]): number {
  let slow = 0;
  let fast = 0;

  let next = (index) => nums[index];

  //part 1
  while (slow < nums.length) {
    slow = next(slow);
    fast = next(next(fast));
    if (slow === fast) break;
  }

  // part 2
  slow = 0;
  while (true) {
    slow = next(slow);
    fast = next(fast);
    if (slow === fast) return slow;
  }
} // T:O(n) S:O(1)
