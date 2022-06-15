// Bag of Tokens
// https://leetcode.com/problems/bag-of-tokens/

/**
 * @param {number[]} tokens
 * @param {number} P
 * @return {number}
 */
var bagOfTokensScore = function(tokens, P) {
  // Constraints
  // 0 <= tockens.length
  // 0 <= P

  // Algorithm
  // sort Array
  // use 2 pointers small and big
  // use small when power is bigger small
  // use big when existing powers is not enough and
  //      count is > 0
  // iterate array

  // conner case token length is []
  // the token array is [100]
  // when the exchange doesn't make sense, length is less than 2

  // sort the array
  tokens.sort((x, y) => x - y);

  // iterate the array
  let small = 0,
    big = tokens.length - 1,
    count = 0;
  while (small <= big) {
    // easy win first
    if (P >= tokens[small]) {
      P -= tokens[small];
      small++;
      count++;
      continue;
    }

    // need count for exchange
    // and the diff should be at least 2
    if (count > 0 && small + 1 < big) {
      P += tokens[big];
      count--;
      big--;
      continue;
    }
    // bail out if the is no tokens and Power
    return count;
  } // O(n)

  // return the result
  return count;
}; // O(n)
