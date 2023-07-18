// https://leetcode.com/problems/palindrome-partitioning/submissions/
// Palindrome Partitioning

// Use DFS
// USE BT
// Use isPali function, left < right
// Use part global
// Use us for for all variants
// el of the variant is a slice of ranges for j from i to end
// next dfs is j+1, not just i, coz need to exclude used symbolgs
// T:O(N2N) S:O(logN)

var partition = function (s) {
  const res = [];
  const part = [];

  function isPali(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  }

  function dfs(index = 0) {
    if (index >= s.length) {
      res.push([...part]);
      return;
    }
    for (let i = index; i < s.length; i++) {
      if (!isPali(s.slice(index, i + 1))) continue;

      part.push(s.slice(index, i + 1));
      dfs(i + 1);
      part.pop();
    }
  }
  dfs();

  return res;
}; // T:O(N2N) S:O(logN)
