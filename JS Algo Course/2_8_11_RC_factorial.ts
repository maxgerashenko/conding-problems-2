// Write a function name factorial that takes integer number as input and return product of // integer and all integers bellow !n = (n*(n-1))

// factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num) {
  // base case return 0 when num is 0
  if (!num) return 1;
  // recursion part return product of number * (num -1)
  return num * factorial(num - 1);

  // alternative format
  // return (!num) ? 1 : num * factorial(num-1);
}

//factorial(0) 1
//factorial(1) 1 * 1
//factorial(2) 2 * 1 * 1

// O(n)
