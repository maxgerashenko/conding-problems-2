// https://www.educative.io/courses/grokking-the-coding-interview/gxk639mrr5r
// Triplet Sum to Zero

// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

const search_triplets = function (arr) {
  // find all unque triplets with sum === 0, in unsored array
  // init results
  // sort array
  // iterate array
  // skip duplicates, if i == i-1
  // use 2 pointers from 2 sides
  // add to result if summ is equal 0;
  // skip start duplicates if start-1 == start
  // skip end duplicates if end == end+1
  // return results

  // init results
  let triplets = [];

  // sort array
  arr.sort((x, y) => x - y);

  // iterate array
  for (let i = 0; i < arr.length - 2; i++) {
    // skip duplicate for 1rst num
    if (i > 0 && arr[i - 1] == arr[i]) i++;

    // use 2 pointers from 2 sides
    let start = i + 1;
    let end = arr.length - 1;
    while (start < end) {
      if (arr[i] + arr[start] + arr[end] === 0) {
        // !!! push arr []
        triplets.push([arr[i], arr[start], arr[end]]);
        start++;
        end--;

        // skip duplicates for start
        while (start < end && arr[start - 1] == arr[start]) start++;
        while (start < end && arr[end] == arr[end + 1]) end--;
      }

      // !!! arr[i] is negative
      if (arr[start] + arr[end] < -arr[i]) start++;
      if (arr[start] + arr[end] > -arr[i]) end--;
    }
  }

  // return result
  return triplets;
}; // T:O(N log N) + O(N^2) === O(N2) S:O(N) - required for sorting

// def search_triplets(arr):
//   # sort array
//   # iterate third
//   # 2 pointers for the rest
//   # add and skip dublicats

//   result = []

//   arr.sort();

//   for i in range(len(arr)):
//     num = arr[i]

//     start = i + 1
//     end = len(arr) - 1
//     while start < end:
//       sum_cur = arr[i] + arr[start] + arr[end]

//       # : at the end
//       if sum_cur == 0:
//         result.append([num, arr[start], arr[end]])
//         start += 1
//         end -= 1

//         # : check typical mistake
//         while start < end & arr[start] == arr[start-1]:
//           start += 1

//         # : at the end
//         # == not =
//         while start < end & arr[end] == arr[end + 1]:
//             end -= 1

//       # : at the end
//       if sum_cur > 0:
//         end -= 1

//       # : at the end
//       if sum_cur < 0:
//         start += 1

//   return result
