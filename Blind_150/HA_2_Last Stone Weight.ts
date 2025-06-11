// https://leetcode.com/problems/last-stone-weight/
// Last Stone Weight

// Use heap
// add all
// take two and smash
// put the rest back
// repeat until 1 left
// T:O(nLogN) S:O(n)

function lastStoneWeight(stones: number[]): number {
  let maxHeap = new Heap((a, b) => b - a);
  for (let el of stones) maxHeap.add(el);
  while (maxHeap.heap.length > 1) {
    let val = maxHeap.remove() - maxHeap.remove();
    maxHeap.add(val);
  }
  return maxHeap.peek();
} // T:O(nlogn) S:O(n)
