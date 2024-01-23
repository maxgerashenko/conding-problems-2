// https://leetcode.com/problems/palindrome-partitioning/description/
// Palindrome Partitioning

// use dfs
// use backtracking
// use isNotPali
// use for end = start + i
// use slice cur + flor slice(start, index)
// T:O(2^N) * palindrom N S:O(2^N)*N

// need start onlyy
// use substring
// get from index to index + 1

function partition(str: string): string[][] {
  const res = [];
  const cur = [];
  const len = str.length;

  function isPali(strLocal) {
    let lenLocal = strLocal.length;
    for (let i = 0; i < ~~(lenLocal / 2); i++)
      if (strLocal[i] !== strLocal[lenLocal - 1 - i]) return false;
    return true;
  }

  function dfs(start) {
    if (start === len) {
      res.push([...cur]);
      return;
    }

    for (let index = start; index < len; index++) {
      let subStr = str.substring(start, index + 1);
      cur.push(subStr);
      if (isPali(subStr)) {
        dfs(index + 1);
      }
      cur.pop();
    }
  }

  dfs(0);

  return res;
} // T:O(n×n!) S:O(n+2 ^()n−1) ×n)
