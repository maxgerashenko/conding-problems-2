// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// Letter Combinations

// DFS
// BackTracking
// use lettersMap
// don't add when combination is emtpy
// user for for every leter
// T:O(4^n) S:O(log4N)

function letterCombinations(digits: string): string[] {
  let res = [];
  let pad = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  let comb = [];

  function dfs(index = 0) {
    if (index >= digits.length) {
      comb.length && res.push(comb.join(''));
      return;
    }

    let letters = pad[digits[index]];
    for (let el of letters) {
      comb.push(el);
      dfs(index + 1);
      comb.pop();
    }
  }

  dfs();
  return res;
} // T:O(4^N) S:O(log4n)
