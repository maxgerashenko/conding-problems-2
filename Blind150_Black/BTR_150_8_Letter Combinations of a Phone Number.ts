// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// Letter Combinations of a Phone Number

// use dfs
// use backtracking
// explore all options
// safe to res when reach the last
//
// T:O(4^N) S:O(N)
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// Letter Combinations of a Phone Number

// use dfs
// use backtracking
// explore all options
// safe to res when reach the last
//
// T:O(4^N) S:O(N)

// T:O(4^N) as 4 options for each key
// T:O(4^N) as all possible combinations

function letterCombinations(digits: string): string[] {
  const res = [];
  if (digits === '') return []; // conner case
  const len = digits.length;
  const comb = [];
  const keypad = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  function dfs(index = 0) {
    if (index === len) {
      res.push(comb.join(''));
      return;
    }

    const digit = digits[index];
    const letters = keypad[digit];
    if (!letters) return;
    for (let letter of letters) {
      comb.push(letter);
      dfs(index + 1);
      comb.pop();
    }
  }
  dfs();

  return res;
} // T:O(4^n*n) S:O(4^n)
