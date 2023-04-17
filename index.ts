// Import stylesheets
import './style.css';
import './Blind75/8_Longest Consecutive Sequence';

var longestConsecutive = function (nums) {
  let numSet = new Set(nums);
  let longest = 0;
  for (let el of numSet) {
    if (numSet.has(el - 1)) continue;
    let count = 1;
    let next = el + 1;
    while (numSet.has(next)) {
      count++;
      next++;
    }
    longest = Math.max(longest, count);
  }

  return longest;
};

// T:O(n) S:O(n)
