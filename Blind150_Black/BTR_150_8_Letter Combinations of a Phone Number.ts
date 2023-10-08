// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// Letter Combinations of a Phone Number

// use dfs
// use backtrack
// use numPad
// for digitMap
// T:O(4^N) S:O(N)

function letterCombinations(digits: string): string[] {
  let digitMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  let res = [];
  let comb = [];
  let len = digits.length;

  function dfs(index = 0) {
    if (index === len) {
      res.push(comb.join(''));
      return;
    }

    let digit = digits[index];
    for (let letter of digitMap[digit]) {
      comb.push(letter);
      dfs(index + 1);
      comb.pop();
    }
  }
  digits.length && dfs();

  return res;
} // T:O(4^N) S:O(N)
