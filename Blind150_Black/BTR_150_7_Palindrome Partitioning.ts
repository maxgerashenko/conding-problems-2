// https://leetcode.com/problems/palindrome-partitioning/description/
// Palindrome Partitioning

// use dfs
// use backtracking
// use isNotPali
// use for end = start + i
// use slice cur + flor slice(start, index)
// T:O(2^N) * palindrom N S:O(2^N)*N

function partition(str: string): string[][] {
  let res = [];
  let comb = [];
  let len = str.length;

  function isNotPali(str, l, r) {
    while (l < r) {
      if (str[l] !== str[r]) return true;
      l++;
      r--;
    }
    return false;
  }

  function dfs(start = 0) {
    if (start === len) {
      res.push([...comb]);
      return;
    }

    for (let index = start; index < len; index++) {
      let slice = str.slice(start, index + 1);
      if (isNotPali(slice, start, index)) continue;
      comb.push(str.slice(start, index + 1));
      dfs(index + 1);
      comb.pop();
    }
  }

  dfs();
  return res;
} // T:O(2^N*N) tree + isPali S:O(2^N * N) Stack + options
