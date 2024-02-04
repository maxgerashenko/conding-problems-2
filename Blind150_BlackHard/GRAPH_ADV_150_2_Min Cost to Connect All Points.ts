// https://leetcode.com/problems/min-cost-to-connect-all-points/
// Min Cost to Connect All Points

// use bfs
// use while and list
// use visited
// use get value
// skip visited

function minCostConnectPoints(points) {
  const visited = new Set();
  const minHeap = new Heap((a, b) => a.val - b.val);
  const len = points.length;
  let totalCount = 0;

  const getElVal = ([x1, y1], [x2, y2]) => {
    return { x: x2, y: y2, val: Math.abs(x1 - x2) + Math.abs(y2 - y1) };
  };
  const getKey = ([x, y]) => `${x},${y}`;

  minHeap.add(getElVal(points[0], points[0]));
  while (minHeap.heap.length > 0 && visited.size < len) {
    let { x, y, val } = minHeap.remove();
    let key = getKey([x, y]);
    if (visited.has(key)) continue;
    visited.add(key);
    totalCount += val;

    for (let el of points) {
      let key = getKey(el);
      if (visited.has(key)) continue;
      let valEl = getElVal([x, y], el);
      minHeap.add(valEl);
    }
  } // bfs

  return totalCount;
} // T:O() S:O()
