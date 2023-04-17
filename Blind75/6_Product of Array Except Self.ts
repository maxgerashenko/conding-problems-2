var productExceptSelf = function (nums) {
  let withOutZero = nums.filter((el) => el !== 0);
  if (nums.length - withOutZero.length >= 2) return nums.map(() => 0);
  let product = nums.reduce((pre, el) => (el === 0 ? pre : pre * el), 1);
  let isZero = nums.indexOf(0) > -1;

  return nums.map((el) => (el === 0 ? product : isZero ? 0 : product / el));
};

// T:O(n) S:O(n)
