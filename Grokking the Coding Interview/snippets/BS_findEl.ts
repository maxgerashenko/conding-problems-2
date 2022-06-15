const binary_search = function (arr, key) {
  // conner case
  let start = 0;
  let end = arr.length - 1;
  const isAscending = arr[start] < arr[end];

  while (start <= end) {
    let middle = start + Math.floor((end - start) / 2);

    if (key === arr[middle]) return middle;
    if (
      (key < arr[middle] && isAscending) ||
      (key > arr[middle] && !isAscending)
    ) {
      end = middle - 1;
      continue;
    }
    start = middle + 1;
  }

  return -1;
}; // T:O(logN) S:O(1);
