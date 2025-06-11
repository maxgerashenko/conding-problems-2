// https://leetcode.com/problems/happy-number/
// Happy Number

// Math as Linked list
// use fast and slow
// use x%10
// use ~~(x/10)
// T:O(n) S:O(1)

function isHappy(n: number): boolean {
  let slow = n;
  let fast = n;

  function next(value) {
    let sum = 0;
    while (value > 0) {
      let rest = value % 10;
      sum += rest * rest;
      value = ~~(value / 10);
    }
    return sum;
  }

  while (fast !== 1) {
    slow = next(slow);
    fast = next(next(fast));
    if (fast !== 1 && slow === fast) return false;
  }
  return true;
} // T:O(n) S:O(1)
