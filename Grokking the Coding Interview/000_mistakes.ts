// lastIndex = nums.length-1;
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
// never use for i
// always use let left, no GlobalEventHandlersEventMap
// !isNaN(char) - is number

// Subsets
// nums.sort((x,y) => x-y) for duplicates
// let result = [];
// let preLevel = [];
// let pre = null;
// for(let num of nums) {
//   let level = [];
//   let options = num !== pre ? result : preLevel;
//   for(let option of options){
//     level.push([option, num]);
//   }
//   preLevel = level;
//   result = level;
// } // T:O(N^2N) S:O(2^N)
// Combination in binary tree node is
// if(n<=1) return 1; // base case;
// insert an el to the array (i=< arr.length) splice(i, 0, element)
// let copy = [...arr]; copy.splice(i, 0, el) is insert
// results = [[]] // array of arrays use 's'

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
// mid = Math.floor(start + (end - start) / 2) // FIX MAX_SAFE_INTEGER
// Move: start = mid+1 || end = mid-1
// at the end start > end

// XOR
// parseInt('11',2) // 3
// x= 3; x.toString(2) // '11'
// X^= [1,1,2] // 2
// X^1 invers 1->0; 0->1;
// diff=1; diff<<=1 // '10';
// xor & diff === 0; '10' & 1 // 0
// nums.reduce((cur, pre) => pre^=cur, 0); // T:O(N) S:O(1)
// to look all = Math.round(len/2); // includes the middle value
// !!! (el & diff) === 0 - () are required

// TOPK
// Use min/max heap for max/min elements and update K elements
// T:O(NlogK) better than T:O(NlogN)
