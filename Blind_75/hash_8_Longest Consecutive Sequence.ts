// https://leetcode.com/problems/longest-consecutive-sequence/

// Easy solution is to sort number in Array
// then we have [1,2,3,4,100,200]
// but soring is T:O(nlog) S:O(N)

// To fix it create a set of elements so each key is a number;
// Go throw the set if el doesn't have previous el it is start
// the count how many elements exists after the start

/**
 * @param {number[]} nums
 * @return {number}
 */
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
}; // T:O(n) S:O(n)
