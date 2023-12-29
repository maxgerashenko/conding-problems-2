// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// Letter Combinations of a Phone Number

// use dfs
// use backtracking
// explore all options
// safe to res when reach the last
//
// T:O(4^N) S:O(N)

function letterCombinations(digits: string): string[] {
  const res = [];
  const n = digits.length;
  const cur = [];
  const digitMap = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  if (n === 0) return [];

  function dfs(index = 0) {
    if (index === n) {
      res.push([...cur]);
      return;
    }

    const digit = digits[index];
    for (let el of digitMap[digit]) {
      cur.push(el);
      dfs(index + 1);
      cur.pop();
    }
  }

  dfs();
  return res.map((el) => el.join(''));
} // T:O(2^N)
