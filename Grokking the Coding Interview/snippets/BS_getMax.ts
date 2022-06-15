function findMaxIndex(start, end, arr) {
  while (start < end) {
    let middle = start + Math.floor((end - start) / 2);

    if (arr[middle] < arr[middle + 1]) {
      start = middle + 1;
      continue;
    }

    end = middle;
  }
  return start;
}
