// https://www.educative.io/courses/grokking-the-coding-interview/3YlQz7PE7OA
// Triplet Sum Close to Target

// Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

const triplet_sum_close_to_target = function (arr, target_sum) {
  // sort array
  // iterate third
  // 2 pointers to find sum
  // min_diff

  let minDiff = Infinity;
  let minSum = Infinity;

  arr.sort((x, y) => x - y);

  for (let i = 0; i < arr.length - 2; i++) {
    let num = arr[i];

    let start = i + 1,
      // end is the end of the array
      end = arr.length - 1;
    while (start < end) {
      let sum = num + arr[start] + arr[end];

      // base case
      if (target_sum - sum === 0) {
        return sum;
      }

      if (Math.abs(target_sum - sum) < minDiff) {
        minDiff = Math.abs(target_sum - sum);
        minSum = sum;
      }

      if (target_sum - sum > 0) {
        start++;
      }

      if (target_sum - sum < 0) {
        end--;
      }
    }
  }

  return minSum === Infinity ? -1 : minSum;
}; // Sort O(N logN) + O(N) * O(N) = O(N2)
// T:O(N^2) S:O(N)
