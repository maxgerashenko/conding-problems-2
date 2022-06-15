// tmp += tmp + x - y
// for !!! not while
// let i !!! not global i

function maxSubarraySum(arr, n) {
  if (arr.length < n) return null;
  let total = 0;
  // find sum of the window
  for (let i = 0; i < n; i++) {
    total += arr[i];
  }
  //move the window from the left to right
  let tmp = total;
  for (let i = n; i < arr.length; i++) {
    tmp += arr[i] - arr[i - n];
    total = Math.max(tmp, total);
  }

  //if it is the end return max
  return total;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([2, 3], 2)); // 700
