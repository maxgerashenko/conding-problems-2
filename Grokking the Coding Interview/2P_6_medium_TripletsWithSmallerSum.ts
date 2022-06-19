// https://www.educative.io/courses/grokking-the-coding-interview/mElknO5OKBO
// Triplets with Smaller Sum

// Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

// Take away
// triplets count += end - start
// count all triples between

const triplet_with_smaller_sum = function (arr, target) {
  let count = 0;
  arr.sort((x, y) => x - y);

  for (let i = 0; i < arr.length - 2; i++) {
    let start = i + 1;
    let end = arr.length - 1;
    while (start < end) {
      let sum = arr[i] + arr[start] + arr[end];
      if (sum >= target) {
        end--;
        continue;
      }
      count += end - start - 1;
      if (sum < target) {
        count += end - 1 - start; // count evething that works before moving the start
      }
      start++;
    }
  }

  return count;
}; // T:(NlogN + N^2) S:(N)

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

function triplet_with_smaller_sum(arr, target) {
  arr.sort((x,y) => x - y);
  let triplets = [];

  for (let i = 0; i < arr.length; i++) {
    let start = i + 1;
    let end = arr.length-1;
    while (start < end) {
      let sum = arr[i] + arr[start] + arr[end];
      if (sum < target) {
        let tmp = start;
        while(tmp < end){
          let sum = arr[i] + arr[tmp] + arr[end];
          if (sum < target) triplets.push([arr[i], arr[tmp], arr[end]]);
          tmp++;
        }

        end--;
        continue;
      }
      end--;
    }
  }

  return triplets;
} // T:(NlogN N*N*N) S:(N)
