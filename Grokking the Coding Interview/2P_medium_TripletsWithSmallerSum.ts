// https://www.educative.io/courses/grokking-the-coding-interview/mElknO5OKBO
// Triplets with Smaller Sum

// Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

// Take away
// triplets count += end - start
// count all triples between

const triplet_with_smaller_sum = function (arr, target) {
  // init count as -1
  // sort array
  // iterare array i < arr.length -2
  // use 2 pointers from 2 sides
  // if sum < taget, increment count
  // as dublicates are included we can just count right - left
  // return count

  let count = 0;

  // sort array
  arr.sort((x, y) => x - y); // !!! sort array

  // iterate i
  for (let i = 0; i < arr.length - 2; i++) {
    let start = i + 1;
    let end = arr.length - 1; // !!! end is index, not length
    // iterate 2 pointers from 2 sides
    while (start < end) {
      let sum = arr[i] + arr[start] + arr[end];

      if (sum < target) {
        // for fixed i and start all indexes form (start to end] count be counted
        count += end - start;
        start++;
        continue;
      }

      end--;
    }
  }

  return count;
}; // O(NlogN) O(N)

// def triplet_with_smaller_sum(arr, target):
//   # init counter
//   # sort arrya
//   # iterate third index
//   # use 2 pointer on 2 sides
//   # if sum < target count all triplets between end and start
//   # return count

//   count = 0

//   arr.sort()

//   for i in range(len(arr)-2):
//     start = i + 1
//     end = len(arr) - 1

//     while start < end:
//       if arr[i] + arr[start] + arr[end] < target:
//         count += end - start
//         start += 1
//         continue
//       end -= 1

//   return count

// Another variant
// Return triplets

const triplet_with_smaller_sum = function (arr, target) {
  // init count as -1
  // sort array
  // iterare array i < arr.length -2
  // use 2 pointers from 2 sides
  // if sum < taget, increment count
  // as dublicates are included we can just count right - left
  // return count

  let triplets = [];

  // sort array
  arr.sort((x, y) => x - y); // !!! sort array

  // iterate i
  for (let i = 0; i < arr.length - 2; i++) {
    let start = i + 1;
    let end = arr.length - 1; // !!! end is index, not length
    // iterate 2 pointers from 2 sides
    while (start < end) {
      let sum = arr[i] + arr[start] + arr[end];

      if (sum < target) {
        // for fixed i and start all indexes form (start to end] count be counted
        for (let j = start + 1; j <= end; j++) {
          triplets.push([arr[i], arr[start], arr[j]]);
        }

        start++;
        continue;
      }

      end--;
    }
  }

  return triplets;
}; // T:O(NlogN + N^2) asymptotically O(N^2) S:O(N2)
