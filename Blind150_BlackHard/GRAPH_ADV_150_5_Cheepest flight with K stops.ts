function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number
): number {
  const adjMapList = {};
  const minHeap = new Heap((a, b) => a[1] - b[1]);
  const distPrice = {};
  const visited = new Set();

  for (let i = 0; i < n; i++) {
    distPrice[i] = Infinity; // init price
    adjMapList[i] = [];
  } // init

  for (let [from, to, price] of flights) {
    from = Number(from);
    adjMapList[Number(from)].push([Number(to), Number(price)]);
  } // init adj

  distPrice[src] = 0;
  minHeap.add([Number(src), 0, k + 1]);

  while (minHeap.heap.length > 0) {
    let [from, fromPrice, count] = minHeap.remove();
    if (from === dst) {
      distPrice[from] = Math.min(distPrice[from], fromPrice);
      continue;
    }
    if (count === 0) continue;
    if (visited.has(from)) continue;
    visited.add(from);
    distPrice[from] = Math.min(distPrice[from], fromPrice);
    for (let [to, toPrice] of adjMapList[from]) {
      let newPrice =
        distPrice[from] == Infinity ? toPrice : distPrice[from] + toPrice;
      minHeap.add([to, newPrice, count - 1]);
    }
  }

  return distPrice[dst] == Infinity ? -1 : distPrice[dst];
} // T:O(V+E) T:O(V)
