// https://www.educative.io/courses/grokking-the-coding-interview/RMV1GV1yPYz
// Subarrays with Product Less than a Target

// Given an array with positive numbers and a positive target number, find all of its contiguous subarrays whose product is less than the target number.

// Take away
// To count all arrays, when product is less all sub arrays between start and end are valid
// interate and take all of them

const find_subarrays = function (arr, target) {
  let result = [];

  let start = 0;
  let end = 0;
  let product = arr[0];
  while (start <= end && end < arr.length) {
    if (product < target) {
      result.push(arr.slice(start, end + 1));
      for (let i = start + 1; i <= end; i++) { // and asingle parts of subarray
        result.push(arr.slice(i, end + 1));
      }
      end++;
      product *= arr[end];
      continue;
    }
    product /= arr[start];
    start++;
  }

  return result;
}; // T:O(NlogN N^2) S:O(N)

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
