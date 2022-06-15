function productOfArray(arr) {
  // recursion
  if (!Array.isArray(arr)) return null;
  // base case if arr is empty  retur 1;
  if (!arr.length) return 1;
  // recursion multiply arr[0] and arr.slice(1);
  return arr[0] * productOfArray(arr.slice(1));
}

// productOfArray(0) // 1
// productOfArray(1) // 1 * 1
// productOfArray(1,2) // 1 * 2 * 1
// productOfArray(1,2,3) // 1 * 2 * 3 * 1

// O(n)
