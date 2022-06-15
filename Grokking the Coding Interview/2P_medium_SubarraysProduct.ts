// https://www.educative.io/courses/grokking-the-coding-interview/RMV1GV1yPYz
// Subarrays with Product Less than a Target

// Given an array with positive numbers and a positive target number, find all of its contiguous subarrays whose product is less than the target number.

// Take away
// To count all arrays, when product is less all sub arrays between start and end are valid
// interate and take all of them

const find_subarrays = function (arr, target) {
  // Find the closest to target triple, if === return the smallest sum
  // init minDiff = Infinity
  // ini minSum = Infinity
  //
  // sort array
  // iterate array i
  // while start < end, coz new 3 numbers
  // use 2 pointers from 2 sides
  // update smallest diff
  // base case, if sum === 0 return sum
  // if cur diff is < minDiff update min sum
  // if minDiff === cur sum
  // check update minSum as min (minSum, cur)
  // if cur sum > target, end --
  // if cur sum < target < start ++
  //
  // !!! return -1 if minSum === Infinity

  let arrs = [];

  let start = 0,
    end = 0,
    product = arr[end];
  while (start <= end && end < arr.length) {
    if (product < target) {
      // All values between start and end arr valid
      for (let i = start; i <= end; i++) {
        arrs.push(arr.slice(i, end + 1));
      }
      end++;
      product *= arr[end];
      continue;
    }

    product /= arr[start];
    start++;
  }

  return arrs;
};

// def find_subarrays(arr, target):
//   result = []
//   product = 1
//   left = 0
//   for right in range(len(arr)):
//     product *= arr[right]
//     while (product >= target and left < len(arr)):
//       product /= arr[left]
//       left += 1
//     # since the product of all numbers from left to right is less than the target therefore,
//     # all subarrays from left to right will have a product less than the target too; to avoid
//     # duplicates, we will start with a subarray containing only arr[right] and then extend it
//     temp_list = deque()
//     for i in range(right, left-1, -1):
//       temp_list.appendleft(arr[i])
//       result.append(list(temp_list))
//   return result
//   # Time: O(n∗(n+1)/2) == O(n2) and Space: O(n3)
