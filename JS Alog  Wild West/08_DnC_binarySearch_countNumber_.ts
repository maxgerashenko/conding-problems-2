function sortedFrequency(arr, num) {
  // easy wins first
  // get binarySearch to get start index
  // get binarySearch to get end index;
  // return the lenght

  // binary search is
  // get the middle
  // if edge return edge
  // in not call binary search with new start end values

  // +1
  if (arr.length === 0) return 0;
  function binarySearchStart(start, end) {
    if (start > end) return -1;
    let mid = start + ~~((end - start) / 2),
      // -3
      el = arr[mid];
    if (el === num && (mid === 0 || arr[mid - 1] !== num)) return mid;
    return el >= num
      ? binarySearchStart(start, mid - 1)
      : binarySearchStart(mid + 1, end);
  }
  function binarySearchEnd(start, end) {
    if (start > end) return -1;
    let mid = start + ~~((end - start) / 2),
      // copy past -3
      el = arr[mid];
    if (el === num && (mid === arr.length - 1 || arr[mid + 1] !== num))
      return mid;
    // +1 +1
    return el > num
      ? binarySearchEnd(start, mid - 1)
      : binarySearchEnd(mid + 1, end);
  }
  let lastIndex = arr.length - 1;
  let start = binarySearchStart(0, lastIndex);
  if (start === -1) return -1;
  let end = binarySearchEnd(start, lastIndex);
  return end === -1 ? lastIndex - start + 1 : end - start + 1;
}
