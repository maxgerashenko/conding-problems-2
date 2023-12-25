// https://leetcode.com/problems/palindrome-partitioning/description/
// Palindrome Partitioning

// use dfs
// use backtracking
// use isNotPali
// use for end = start + i
// use slice cur + flor slice(start, index)
// T:O(2^N) * palindrom N S:O(2^N)*N

function partition(str: string): string[][] {
  const res = [];
  const cur = [];
  const arr = str.split('');
  const n = arr.length;

  function isPali(slice) {
    let l = 0;
    let r = slice.length - 1;
    while (l < r) {
      if (slice[l] !== slice[r]) return false;
      l++;
      r--;
    }
    return true;
  }

  function dfs(index = 0) {
    if (index === n) {
      cur.length > 0 && res.push([...cur]);
      return;
    }
    for (let i = index; i < n; i++) {
      let part = arr.slice(index, i + 1); // partion
      if (!isPali(part)) continue; // pali only
      cur.push(part.join(''));
      dfs(i + 1);
      cur.pop(); // btr
    }
  }
  dfs();
  return res;
} // T:O(2^N*N) S:O(2^N*N)
