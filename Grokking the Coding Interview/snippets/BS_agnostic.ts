function BS(start, end, arr, key) {
  let isAsceniding = arr[start] < arr[end];
  while (start <= end) {
    let middle = start + Math.floor((end - start) / 2);
    if (key === arr[middle]) return middle;
    if (
      (key < arr[middle] && isAsceniding) ||
      (key > arr[middle] && !isAsceniding)
    ) {
      end = middle - 1;
      continue;
    }
    start = middle + 1;
  }
  return -1;
}
