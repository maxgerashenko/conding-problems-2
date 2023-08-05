// https://leetcode.com/problems/valid-parenthesis-string/description/
// Valid Parenthesis String

// bruteforce is T:O(3^n) S:O(n) as 3 posibilites
// Memoization T:O(n^3) S:O(n*count), Map(n,count)*n times
// Greedy T:O(n) S:O(1)

// original solution is 3^n as 3 options for wild card
// Menoizatin is n^3 as matrix is 2D index X counts(-1, 0, +1) X n times
// Greedy as I don't need variations, need just posibily, so range in good enought

// use Greedy
// use range of minOpenCount and MaxOpenCount
// minOpenCount should be 0 at the end
// iterate string with min and max
// if min is < 0 i can increase it 0
// but also should check that max is > 0 at any time
// otherwise return false
// when ( min +=1 max+=1
// when ) min -=1 max-=1
// when * min -=1 max+=1
// T:O(N) S:O(1)

function checkValidString(s: string): boolean {
  let minOpenCount = 0;
  let maxOpenCount = 0;

  for (let el of s.split('')) {
    switch (el) {
      case '(': {
        minOpenCount++;
        maxOpenCount++;
        break;
      }
      case ')': {
        minOpenCount--;
        maxOpenCount--;
        break;
      }
      case '*': {
        minOpenCount--;
        maxOpenCount++;
        break;
      }
    }
    if (maxOpenCount < 0) return false; // base case
    if (minOpenCount < 0) {
      minOpenCount++;
    } // conner case
  }
  return minOpenCount == 0;
} // T:O(n) S:O(1)
