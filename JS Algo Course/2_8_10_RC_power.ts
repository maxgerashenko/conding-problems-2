// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

// Write the function that take 2 inputs base and exponetial. Function should return power;

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exp) {
  // base case
  if (!exp) return 1;
  // recursion
  return base * power(base, exp - 1);
}

// O(logn)
