// --- Common
// nums.length
// max = Math.max
// lastIndex = nums.length-1;
// sort T:O(NlogN) S(N)
// minHeap insert T:(log K) S:(K)
// minHeap all el NlogK if it's limited by K at once
// if(pre && pre.val === key) return node;
// sort (x.start, y.start) => s.start - y.start
// this.
// class Heap {
// this.arr.sort, but this.arr = this.arr.filter
// always use let left, no GlobalEventHandlersEventMap
// !isNaN(char) - is number
// Array(5+1).fill([])
// let sum = 0; // init value

// --- Subsets
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

// --- Binary search
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

// --- XOR
// parseInt('11',2) // 3
// x= 3; x.toString(2) // '11'
// X^= [1,1,2] // 2
// X^1 invers 1->0; 0->1;
// diff=1; diff<<=1 // '10';
// xor & diff === 0; '10' & 1 // 0
// nums.reduce((cur, pre) => pre^=cur, 0); // T:O(N) S:O(1)
// to look all = Math.round(len/2); // includes the middle value
// !!! (el & diff) === 0 - () are required

// --- TOPK
// Use min/max heap for max/min elements and update K elements
// T:O(NlogK) better than T:O(NlogN)
// sort alternative with Heap
// (k1, k2) not icluded = arr.pop() for(i=0;i<k2-k1-1;i++) sum+= arr.pop();
// no dublicate in a row = maxHeap.arr is empty and pre is empty

// --- Merge K
// for (let list of lists) minHeap.push({ val: list.shift(), list });
// while (minHeap.arr.length > 0) {
//   let { val, list } = minHeap.pop();
//   result.push(val);
//   if (list.length === 0) continue;
//   minHeap.push({ val: list.shift(), list});
// }
// return result
// K element for the min heap
// Rage min form Heap and max of currently inserted

// --- DP
// Top Down  - Recursive tree with hashMap
// Bottom up - 2x table with reusing of previus row value
// 1st col - 0
// 1sr row - pre set
// Selected - go backwards throw the matrix
// Optimize - 2 rows with i%2, second row go backwards c--

// --- 2P
// end=arr.length-1
// while start<end, when need 2 numbers
// while start<=end, when need 1 number
// when sum===target start++ end--
// sort

// --- CS
// nums[i] = i+1
// [nums[i], nums[val-1]] = [nums[val-1], nums[i]]
// null is always an option

// --- BFS
// while (level.length) {
//  let tmp = [];
//  while (level.length) {

// --- 2H
// rebalance(){
//   if(this.maxHeap.length > this.minHeap.length + 1)
//     this.minHeap.push(this.maxHeap.pop())
//   if(this.maxHeap.length < this.minHeap.length)
//     this.maxHeap.push(this.minHeap.pop())
// }
// find_median(){
//     return this.maxHeap.arr.length === this.minHeap.arr.length
//     ? this.maxHeap.value/2 + this.minHeap.value/2
//     : this.maxHeap.value;
//   }
