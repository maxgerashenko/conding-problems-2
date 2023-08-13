// https://leetcode.com/problems/top-k-frequent-elements/description/
// Top K Frequent Elements




function topKFrequent(nums: number[], k: number): number[] {
  let maxHeap = new Heap((a, b) => b.count - a.count);
  let hasMapCount = {};
  let res = [];

  for (let el of nums) {
    if (!(el in hasMapCount)) {
      hasMapCount[el] = 0;
    }
    hasMapCount[el]++;
  } // init

  for (let key of Object.keys(hasMapCount))
    maxHeap.add({ value: key, count: hasMapCount[key] });

  for (let i = 0; i < k; i++) res.push(maxHeap.remove().value);

  return res;
} // T:O(KlogN) S:O(n)
