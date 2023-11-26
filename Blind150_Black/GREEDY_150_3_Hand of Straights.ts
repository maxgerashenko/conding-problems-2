// https://leetcode.com/problems/hand-of-straights/description/
// Hand of Straights

// use Greedy
// use hashMapElCount
// use MinHeap instead of el sort
// use for first el < fist+size
// use return false if el doesn't exsit in the next range
// retur false if n%size != 0
// use while untill healp > 0
//
// T:O(N) S:O(N)

function isNStraightHand(hand: number[], groupSize: number): boolean {
  let n = hand.length;
  if (n % groupSize !== 0) return false; // base case
  const hashMapElCount = {};
  const minHeap = new Heap((a, b) => a - b);

  for (let el of hand) {
    hashMapElCount[el] = el in hashMapElCount ? hashMapElCount[el] + 1 : 1;
  } // init hashCount

  minHeap.add(...Object.keys(hashMapElCount).map((el) => Number(el))); // init heap

  while (minHeap.heap.length) {
    let first = minHeap.peek();
    for (let num = first; num < first + groupSize; num++) {
      if (!(num in hashMapElCount)) return false;
      hashMapElCount[num]--;
      if (hashMapElCount[num] === 0) {
        if (minHeap.peek() === num) {
          minHeap.remove();
        }
        delete hashMapElCount[num];
      }
    }
  }

  return true; // base case
} // T:O(N) S:O(N)
