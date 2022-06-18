// https://www.educative.io/courses/grokking-the-coding-interview/gxk639mrr5r
// Triplet Sum to Zero

// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

const search_triplets = function (arr) {
  // sort
  // check sum
  // remove duplicates
  let triplets = [];
  arr.sort((x, y) => x - y);

  for (let i = 0; i < arr.length - 2; i++) {
    let start = i + 1;
    let end = arr.length - 1;
    while (start < end) {
      if (arr[i] + arr[start] + arr[end] === 0) {
        triplets.push([arr[i], arr[start], arr[end]]);

        while (start < end && arr[start] === arr[start + 1]) {
          start++;
        }
        while (start < end && arr[end] === arr[end - 1]) {
          end--;
        }
      }

      if (arr[i] + arr[start] + arr[end] > 0) {
        end--;
        continue;
      }
      start++;
    }
  }
  console.log('---');
  return triplets;
}; // T: (NlogN + N^2) S:(N)


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
