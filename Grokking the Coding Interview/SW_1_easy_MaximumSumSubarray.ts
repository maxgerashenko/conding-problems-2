// https://www.educative.io/courses/grokking-the-coding-interview/JPKr0kqLGNP#problem-statement
// Maximum Sum Subarray

// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

const max_sub_array_of_size_k = function (k, arr) {
  let max = 0;
  let sum = 0;
  let length = 0;

  for (let i in arr) {
    sum += arr[i];
    length++;
    
    if (length> k) {
      sum -= arr[+i+1-length];
      length--;
    }

    console.log(sum)
    max = Math.max(max, sum);
  }

  return max;
}; // T:O(N) S:(1)
