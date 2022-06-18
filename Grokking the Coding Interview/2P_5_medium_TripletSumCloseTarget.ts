// https://www.educative.io/courses/grokking-the-coding-interview/3YlQz7PE7OA
// Triplet Sum Close to Target

// Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

const triplet_sum_close_to_target = function (arr, target_sum) {
  let minSum = Number.MAX_SAFE_INTEGER;
  arr.sort((x, y) => x - y);

  for (let i = 0; i < arr.length - 2; i++) {
    let start = i + 1;
    let end = arr.length - 1;
    while (start < end) {
      let sum = arr[i] + arr[start] + arr[end];
      if (Math.abs(target_sum - sum) < Math.abs(target_sum - minSum)) {
        minSum = sum;
      }
      if (Math.abs(target_sum - minSum) === Math.abs(target_sum - sum)) {
        mindSum = Math.min(minSum, sum);
      }
      if (sum > target_sum) {
        end--;
        continue;
      }
      start++;
    }
  }

  return minSum;
}; // T:O(NlogN + N^2) S:O(N)
