// https://www.educative.io/courses/grokking-the-coding-interview/7D5NNZWQ8Wr

// Given an array, find the average of all contiguous subarrays of size ‘K’ in it.

// Naive
// O(N*K)

function find_averages_of_subarrays(K, arr) {
  const result = [];
  for (let i = 0; i < arr.length - K + 1; i++) {
    // find sum of next 'K' elements
    sum = 0.0;
    for (let j = i; j < i + K; j++) {
      sum += arr[j];
    }
    result.push(sum / K); // calculate average
  }

  return result;
}

// Sliding window
// O(N)

function find_averages_of_subarrays(K, arr) {
  let result = [],
    start = 0,
    end = 0,
    sum = 0;

  while (end < arr.length) {
    sum += arr[end];
    if (end - start === K - 1) {
      result.push(sum / K);
      sum -= arr[start];
      start++;
    }
    end++;
  }

  return result;
}
