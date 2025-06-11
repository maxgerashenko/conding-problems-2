// https://leetcode.com/problems/k-closest-points-to-origin/description/
// K Closest Points to Origin

// Use MaxHeap to find Min K
// Sort only K values
// Ighnore other
// T:O(NlogK) S:O(K)

function kClosest(points: number[][], k: number): number[][] {
  let maxHeap = new Heap((a, b) => b.val - a.val);
  let [x, y] = points.pop();
  maxHeap.add({ coord: [x, y], val: Math.pow(x, 2) + Math.pow(y, 2) });

  for (let [x, y] of points) {
    let val = Math.pow(x, 2) + Math.pow(y, 2);
    if (maxHeap.heap.length < k) {
      maxHeap.add({ coord: [x, y], val });
      continue;
    }
    if (val > maxHeap.peek().val) continue;
    maxHeap.remove();
    maxHeap.add({ coord: [x, y], val });
  }

  return maxHeap.heap.map((x) => x.coord);
} // T:O(NlogK) S:O(K)
