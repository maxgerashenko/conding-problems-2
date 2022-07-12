// sort T:O(NlogN) S(N)
// minHeap insert T:(log K) S:(K)
// minHeap all el NlogK if it's limited by K at once

// if(pre && pre.val === key) return node;
// sort (x.start, y.start) => s.start - y.start
// this.
// class Heap {
// max = Math.max
// for in i; +i
// for in i: skip [null, 1]
// this.arr.sort, but this.arr = this.arr.filter

// Subsets

// Binary search
// function bs(arr, key) {
//   let start = 0;
//   let end = arr.length;
//   while (start <= end) {
//     let mid = Math.floor(start / 2 + end / 2);
//     if (arr[mid] === key) return mid;
//     if (key > arr[mid]) {
//       start = mid + 1;
//       continue;
//     }
//     end = mind - 1;
//   }
//   return -1;
// }
// mid = Math.floor(start + (end - start) / 2);
// Problem: MAX_SAFE_INTEGER;
// Fix: start + (end - start) / 2
// Problem: Math.floor selects left side
// mid = Math.floor(start + (end - start) / 2);
// Fix: start = mid+1 || end = mid-1
// at the end if key is not found start === end + 1

// XOR 
// X^= [1,1] // 0
// X^= [1,1,2] // 2
// 0 ^ 1 = 0; 1 ^ 1 = 0;
// nums.reduce((cur, pre) => pre^=cur, 0); // T:O(N) S:O(1)
// half = Math.round(len/2); // includes the middle value
