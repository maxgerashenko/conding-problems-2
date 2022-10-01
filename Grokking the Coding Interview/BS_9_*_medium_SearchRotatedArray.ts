// https://www.educative.io/courses/grokking-the-coding-interview/N8XZQ1q1O46
//
// Search in Rotated Array

const search_rotated_array = function (
  arr,
  key,
  start = 0,
  end = arr.length - 1
) {
  while (start <= end) {
    let mid = Math.floor(start + end / 2 - start / 2);
    if (arr[mid] === key) return mid; // base case
    const isLeftAscending = arr[start] < arr[mid];
    const isKeyInLeftSide =
      (isLeftAscending && key > arr[start] && key < arr[mid]) ||
      (!isLeftAscending && (key < arr[mid] || key > arr[end]));
    if (isKeyInLeftSide) {
      end = mid - 1;
      continue;
    }
    start = mid + 1;
  }
  return -1;
}; // T:O(logN) S:O(1)

const search_rotated_with_duplicates = function (arr, key, start = 0, end = arr.length - 1) {
  while (start <= end) {
    let mid = Math.floor(start + end / 2 - start / 2);
    if (arr[mid]===key) return mid; // base case
    const isLeftAscending = arr[start] < arr[mid];
    if(isLeftAscending){
      while(arr[mid] === arr[mid-1]) mid--;
      while(arr[start] === arr[start+1])start++;
    if(!isLeftAscending){
      while(arr[mid] === arr[mid-1]) mid++;
      while(arr[end] === arr[end-1]) end--;
    }
    const isKeyInLeftSide = (isLeftAscending && (key > arr[start] && key < arr[mid]))
    || (!isLeftAscending && (key < arr[mid] || key > arr[end]));
    if (isKeyInLeftSide) {
      end = mid - 1;
      continue;
    }
    start = mid + 1;
  }
  return -1;
} // T:O(logN) S:O(1)