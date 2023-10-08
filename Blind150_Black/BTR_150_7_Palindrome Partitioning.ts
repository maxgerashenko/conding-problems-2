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
  let n = str.length;

  function isPali(str) {
    let l = 0;
    let r = str.length - 1;
    while (l < r) {
      if (str[l] !== str[r]) return false;
      l++;
      r--;
    }
    return true;
  }

  function dfs(index = 0) {
    if (index === n) {
      res.push([...comb]);
      return;
    }

    for (let end = index; end < n; end++) {
      let slice = str.slice(index, end + 1);
      if (!isPali(slice)) continue;
      comb.push(slice);
      dfs(end + 1);
      comb.pop(); // backtracking
    }
  }
  dfs();

  return res;
} // T:O(2^N*N) S:O(2^N*N)
