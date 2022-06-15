function findRotatedIndex(arr, num) {
  // easy win
  // recursive binary search
  // flase condition
  // positive condition
  // search condition
  // is reverse check
  // is start <= num && num < mid
  // or mid < num && num < end

  if (arr.length === 0) return -1;
  function binarySearch(start, end) {
    if (start > end) return -1;
    let mid = start + ~~((end - start) / 2),
      midEl = arr[mid];
    if (midEl === num) return mid;
    if (arr[start] < midEl) {
      return arr[start] <= num && num < midEl
        ? binarySearch(start, mid - 1)
        : binarySearch(mid + 1, end);
    }
    return midEl < num && num <= arr[end]
      ? binarySearch(mid + 1, end)
      : binarySearch(start, mid - 1);
  }
  return binarySearch(0, arr.length - 1);
}
