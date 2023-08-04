// https://leetcode.com/problems/hand-of-straights/submissions/
// Hand of Straights

// Greedy
// use minHeap
// use hashMapCount
// conner case if n%3!==0 return false
// get min from minHeap
// range min...min+range
// base case if no i from range in hashMapCount return false
// get next min and next rang
// return true if minHeap is empty
// T:O(n) S:O(n)

function isNStraightHand(hand: number[], groupSize: number): boolean {
  let hashMapCount = {};
  let minHeap = new Heap();
  let n = hand.length;

  if (n % groupSize !== 0) return false; // conner case

  // init
  for (let el of hand) {
    if (hashMapCount[el] == null) {
      hashMapCount[el] = 0;
      minHeap.add(el);
    }
    hashMapCount[el]++;
  }

  while (minHeap.heap.length > 0) {
    let start = minHeap.peek();
    let end = start + groupSize;

    for (let i = start; i < end; i++) {
      if (hashMapCount[i] == null) return false;
      hashMapCount[i]--;
      if (hashMapCount[i] === 0) {
        delete hashMapCount[i];
        minHeap.remove();
      }
    }
  }

  return true;
} // T:O(n) S:O(n)
