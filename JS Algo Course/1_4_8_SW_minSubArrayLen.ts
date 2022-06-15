function minSubArrayLen(arr, n) {
  if (!arr || !n) return 0;

  let i = 0,
    j = 0,
    min = Number.MAX_SAFE_INTEGER,
    cur = arr[i];
  while (j < arr.length) {
    if (cur < n) {
      j++;
      cur += arr[j];
    }
    if (cur >= n) {
      min = Math.min(min, j - i + 1);
      cur -= arr[i];
      i++;
    }
  }

  return min === Number.MAX_SAFE_INTEGER ? 0 : min;
}

// Time complexity O(n)
// Space complexity O(1)

minSubArrayLen([2, 3, 1, 2, 3, 4], 7); //2
