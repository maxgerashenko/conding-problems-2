// https://leetcode.com/problems/min-cost-to-connect-all-points/
// Min Cost to Connect All Points

// use minHeap
// use while
// use visited
// like bfs
//
// T:O(nlon) S:O(n)

// aternative is UNION_FIND
// and sort el by value

var minCostConnectPoints = function (points) {
  let sum = 0;
  let minHeap = new Heap((a, b) => a.val - b.val);
  const getPoint = ({ x: x0, y: y0 }, { x, y }) => ({
    key: `${x},${y}`,
    cord: { x, y },
    val: Math.abs(x0 - x) + Math.abs(y0 - y),
  });
  let visited = new Set();
  let n = points.length;

  // init
  let [x, y] = points.shift();
  minHeap.add(getPoint({ x, y }, { x, y }));

  while (minHeap.heap.length > 0 && visited.size < n) {
    let { key, cord, val } = minHeap.remove();
    if (visited.has(key)) continue;
    visited.add(key);

    sum += val; // increment

    for (let [x, y] of points) {
      let point = getPoint(cord, { x, y });
      if (visited.has(point.key)) continue;
      minHeap.add(point);
    }
  }

  return sum;
}; // T:O(nlogn) S:O(n)
