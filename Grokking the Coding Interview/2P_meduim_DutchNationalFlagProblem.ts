// https://www.educative.io/courses/grokking-the-coding-interview/RMBxV6jz6Q0
// Dutch National Flag Problem

// Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

// Input:  [1, 0, 2, 1, 0]
// Output: [0 0 1 1 2]

const dutch_flag_sort = function (arr) {
  // sort array in place
  // use 2 pointers from 2 sides
  // start and end
  // there are only 3 positions
  // if node == 0 do nothing
  // if 1 replace to the start, and move to the start
  // if 2 replace to the end, and move to the end
  // sorting form the left to right
  // when replace from the right, have to double check

  // [1, 0, 2, 1, 0]
  // [0  0. 1. 1. 2]
  //              i
  //     s
  //           e
  let start = 0;
  let end = arr.length - 1;
  let i = 0;
  // coz need to check last end
  while (i <= end) {
    let num = arr[i];

    if (num === 1) {
      i++;
      continue;
    }

    if (num === 0) {
      [arr[start], arr[i]] = [arr[i], arr[start]];
      start++;
      i++;
      continue;
    }

    if (num === 2) {
      [arr[i], arr[end]] = [arr[end], arr[i]];
      end--;
      // i + 0, coz need to double check current position again
    }
  }
}; // O(N) O(1)

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
