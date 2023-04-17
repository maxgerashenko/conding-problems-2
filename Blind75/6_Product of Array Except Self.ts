var productExceptSelf = function (nums) {
  let withOutZero = nums.filter((el) => el !== 0);
  if (nums.length - withOutZero.length >= 2) return nums.map(() => 0);
  let product = nums.reduce((pre, el) => (el === 0 ? pre : pre * el), 1);
  let isZero = nums.indexOf(0) > -1;

  return nums.map((el) => (el === 0 ? product : isZero ? 0 : product / el));
};

// T:O(n) S:O(n)

// prefix postfix
var productExceptSelf = function (nums) {
  let prefix = 1;
  const result = [];
  for (let index in nums) {
    result[index] = prefix;
    prefix *= nums[index];
  }
  let postFix = 1;
  for (let index = nums.length - 1; index >= 0; index--) {
    result[index] *= postFix;
    postFix *= nums[index];
  }

  return result;
};

// T:O(N) S:O(1)
