function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number
): number {
  const adjMapList = {};
  const minHeap = new Heap((a, b) => a.price - b.price);
  const distPrice = {};
  k + 1;

  for (let i = 0; i < n; i++) distPrice[i] = Infinity; // init price

  for (let [from, to, price] of flights) {
    if (adjMapList[from] == null) {
      adjMapList[from] = [];
    }
    adjMapList[from].push([to, price]);
  } // init adj

  minHeap.add({ from: src, price: 0 });
  distPrice[src] = 0;

  while (k > 0 && minHeap.heap.length > 0) {
    console.log(minHeap.heap);
    let { from, fromPrice } = minHeap.remove();
    k--;
    distPrice[from] = Math.min(distPrice[from], fromPrice);
    console.log(distPrice[from]);
    if (from === dst) break;
    for (let [to, toPrice] of adjMapList[from]) {
      console.log(to, toPrice);
      minHeap.add({ from: to, price: distPrice[from] + toPrice });
    }
  }

  return distPrice[dst] == Infinity ? -1 : distPrice[dst];
} // T:O(V+E) T:O(V)
