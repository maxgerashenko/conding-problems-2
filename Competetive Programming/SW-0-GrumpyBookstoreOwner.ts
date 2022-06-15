// #1
// Grumpy Bookstore Owner
// https://leetcode.com/problems/grumpy-bookstore-owner/

// Use preindex next time!!!

var maxSatisfied = function(customers, grumpy, X) {
  // Constraints
  // 0<=customers.length, grumpy.length<=1000
  // 0<=customers[i] value<=1000
  // 1<=X value<=customers.length

  // calculate sum without superpower

  // Algorigth Sliding window
  // init the window value
  // move the the window
  // - substract left part
  // - add right part

  // sum without superpower

  let max = 0;
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) {
      max += customers[i];
    }
  }

  // init the window
  for (let i = 0; i < X; i++) {
    if (grumpy[i] === 1) {
      max += customers[i];
    }
  }

  // move the window
  let cur = max;
  let start = 0;
  let end = X - 1;
  while (end < customers.length - 1) {
    if (grumpy[start] === 1) {
      cur -= customers[start];
    }
    start++;
    end++;
    if (grumpy[end] === 1) {
      cur += customers[end];
    }
    max = Math.max(cur, max);
  }

  return max;
};
