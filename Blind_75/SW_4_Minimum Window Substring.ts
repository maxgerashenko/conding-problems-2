// https://leetcode.com/problems/minimum-window-substring/description/

// use Sliding window to find min length
// Use hashMapCount for pattern
// use hashMapCount to know if patter is met
// use total count to avoid checking the all patter hashMapCount
var minWindow = function (str, pattern) {
  let matchCount = 0;
  let hashMapCount = {};
  for (let el of pattern.split('')) {
    if (hashMapCount[el] == null) {
      hashMapCount[el] = 0;
      matchCount++;
    }
    hashMapCount[el]++;
  }
  let left = 0;
  let minStr = { length: Number.MAX_SAFE_INTEGER };
  for (let right = 0; right < str.length; right++) {
    let rightEl = str[right];
    if (rightEl in hashMapCount) {
      hashMapCount[rightEl]--;
      if (hashMapCount[rightEl] === 0) {
        matchCount--;
      }
      while (matchCount === 0 && left <= right) {
        const elLeft = str[left];
        if (elLeft in hashMapCount) {
          hashMapCount[elLeft]++;
          if (hashMapCount[elLeft] === 1) {
            if (right - left + 1 < minStr.length) {
              minStr = str.slice(left, right + 1);
            }
            matchCount++;
            left++;
            break;
          }
        }
        left++;
      }
    }
  }
  return minStr.length === Number.MAX_SAFE_INTEGER ? '' : minStr;
};

// T:O(N) S:O(N)
