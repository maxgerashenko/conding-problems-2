// Minimum Interval to Include Each Query
//
// https://leetcode.com/problems/minimum-interval-to-include-each-query/description/


// NOT READY


// add for start for each element
// remove only by end

interface El {
  val: number;
  end: number;
  index: number;
}

function minInterval(intervals: number[][], queries: number[]): number[] {
  let qLen = queries.length;
  let intLen = intervals.length;
  let minHeap = new Heap<El>((a, b) => a.val - b.val);
  let res = Array(qLen).fill(-1);

  intervals.sort((a, b) => a[0] - b[0]); // sort by start
  let queriesIndex = queries.map((el, i) => [el, i]);
  queriesIndex.sort((a, b) => a[0] - b[0]);

  console.log(intervals);
  console.log(queriesIndex);

  let start = 0;
  for (let [el, origin] of queriesIndex) {
    for (let i = start; i < intLen; i++) {
      let [start, end] = intervals[i];
      if (i > el) {
        start = i;
        break;
      } // stop adding

      if (start <= el && el <= end) {
        minHeap.add({ val: end - start + 1, end: end, index: origin });
      }
    }

    while (minHeap.heap.length > 0 && minHeap.peek().end < el) minHeap.remove(); // clean ended intervals
    if (minHeap.heap.length > 0) {
      res[minHeap.peek().index] = minHeap.peek().val; // assign value in order
    }
  }

  return res;
} // T:O(nLogN + QLogQ)


