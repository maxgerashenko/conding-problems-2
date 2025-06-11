// https://leetcode.com/problems/happy-number/
// Happy Number

// use recurtion
// use fast and slow
// use ~~(x/10) and x%10
// slow will === fast
// if is 1 return true
// otherwise return false
//
// T:O(n) S:O(n)

function isHappy(n: number): boolean {
  function next(n) {
    let sum = 0;
    while (n > 0) {
      sum += Math.pow(n % 10, 2);
      n = ~~(n / 10);
    }
    return sum;
  }

  let slow = next(n);
  let fast = next(next(n));

  while (slow != fast) {
    slow = next(slow);
    fast = next(next(fast));
  }

  return slow === 1;
} // T:O(n) S:O(n)
