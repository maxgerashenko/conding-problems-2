// https://leetcode.com/problems/plus-one/
// Plus One

// use array
// use exclude logic
// start from the end
// if el < 9 it is the end el++;
// if 9 then 0
// if first element add 1 to the begining
//
// T:O(n) S:O(1)

function plusOne(digits: number[]): number[] {
  let n = digits.length;
  let index = n - 1;

  while (index > -1) {
    if (digits[index] < 9) {
      digits[index]++;
      break;
    }
    digits[index] = 0;
    if (index === 0) {
      digits.unshift(1);
    }
    index--;
  }

  return digits;
} // T:O(n) S:O(1)
