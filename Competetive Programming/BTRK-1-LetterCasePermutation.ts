//https://leetcode.com/problems/letter-case-permutation/

// 784. Letter Case Permutation

// options 2(Lover/Upper) positions s.lenght =  2*n
// S length 1..12
// S will consist only of letters or digits

/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  // Constraints
  // 1 <= S.length <= 12
  // S consist only from letters and digits

  const res = [];
  (function BT(sub, index) {
    if (index === S.length) {
      res.push(sub);
      return;
    }

    let char = S[index];
    index++;
    BT(sub + char, index);
    if (/[a-z]/.test(char)) BT(sub + char.toUpperCase(), index);
    if (/[A-Z]/.test(char)) BT(sub + char.toLowerCase(), index);
  })("", 0);

  return res;
};
