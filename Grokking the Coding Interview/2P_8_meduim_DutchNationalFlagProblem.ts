// https://www.educative.io/courses/grokking-the-coding-interview/RMBxV6jz6Q0
// Dutch National Flag Problem

// Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

const dutch_flag_sort = function (arr) {
  let start = 0;
  let end = arr.length - 1;
  let i = 0;
  while (i <= end) {
    if (arr[i] === 2) {
      [arr[i], arr[end]] = [arr[end], arr[i]];
      end--;
      continue;
    }
    if (arr[i] === 0) {
      [arr[start], arr[i]] = [arr[i], arr[start]];
      start++;
    }
    i++;
  }

  return arr;
}; // T:O(n) S:O(1)

// def dutch_flag_sort(arr):
// # there are 3 option 0 1 2
// # can use 2 ponters on 1 side
// # base case when 1 iterate
// # when 0 swap with start
// # when 1 swap with end

//   start = 0
//   end = len(arr) - 1
//   i = 0
//   while i <= end:
//     num = arr[i]
//     # base case
//     if num == 1:
//       i += 1
//       continue
//     if num == 0:
//       arr[start], arr[i] = arr[i], arr[start]
//       start += 1
//       # arr[i] could be 0 or 1, becaue i have checked that
//       # so need to skip
//       i += 1
//       continue
//     if num == 2:
//       arr[i], arr[end] = arr[end], arr[i]
//       end -= 1
//       # shouldn't skip, coz it wasn't check
//       continue
