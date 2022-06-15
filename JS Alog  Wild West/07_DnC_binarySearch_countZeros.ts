function countZeroes(arr) {
  // call recursive fucntion that return index
  // get mid value
  // if first el = 0 return zero
  // if if out of the array return -1
  // if prev is 1 and tmp = 0 return index
  // if inedx is 0 call function recursivly from current index to the start
  // if inded is 1 call function recursivly from current indes to the end.
  // rern 0 if index is -1;
  // return number of zeros based on index

  // +1
  if (arr.length === 0) return 0; // O(1)
  function getIndex(start, end) {
    if (start > end) return -1;
    // +1
    let mid = start + ~~((end - start) / 2), //O(1)
      el = arr[mid];
    if ((mid === 0 || arr[mid - 1] === 1) && el === 0) return mid; //O(1)
    return el === 0 ? getIndex(0, mid - 1) : getIndex(mid + 1, end); //O(1)
  } // O(log n)
  let index = getIndex(0, arr.length - 1); //O(1)
  return index === -1 ? 0 : arr.length - 1 - index + 1; // O(n)
} // O(log n)
