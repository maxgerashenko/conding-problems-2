// https://leetcode.com/problems/interleaving-string/
// Interleaving String

// DFS with cache
//
// brute force is with out cahce is O(2^(n+m))
// dfs with cache gives n1*n2 solution
// cache only false, coz we can imediatly return true as IS function
// when n1 and n2 are after last place return true
// when n1 is not out of the bounce and n1 === s[n1] dfs next and return true
// whne n2 is not out of the bouce and n2 === s[n2] dfs next and return true
// otherwice cache result and return false
//
// T:O(n1*n2) S:O(n1+n2)
function isInterleave(s1: string, s2: string, s3: string): boolean {
  let hashMapBoolean = {};
  let n1 = s1.length;
  let n2 = s2.length;
  let total = s3.length;

  if (n1 + n2 !== total) return false; // conner case

  function dfs(i1 = 0, i2 = 0) {
    if (i1 === n1 && i2 === n2) return 1; // base case
    if (hashMapBoolean[i1 + ',' + i2] != null)
      return hashMapBoolean[i1 + ',' + i2]; // cache
    if (i1 < n1 && s1[i1] === s3[i1 + i2] && dfs(i1 + 1, i2)) return true;
    if (i2 < n2 && s2[i2] === s3[i1 + i2] && dfs(i1, +i2 + 1)) return true;
    hashMapBoolean[i1 + ',' + i2] = false;
    return false;
  }

  return dfs();
} // T:O(n1*n2) S:(n1+n2)
// not as brute force 2^()n1+n2)
