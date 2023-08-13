// https://leetcode.com/problems/top-k-frequent-elements/description/
// Top K Frequent Elements

function topKFrequent(nums: number[], k: number): number[] {
  let hasMapCount = {};
  let res = [];
  let bucketList = [];
  let n = nums.length;

  for (let el of nums) {
    hasMapCount[el] = 1 + (hasMapCount[el] || 0);
  }

  for (let key of Object.keys(hasMapCount)) {
    bucketList[hasMapCount[key]] = [
      ...(bucketList[hasMapCount[key]] || []),
      key,
    ];
  }

  let index = n;
  while (res.length < k && index >= 0) {
    if (!bucketList[index] || !bucketList[index].length) {
      index--;
      continue;
    }

    res.push(bucketList[index].pop());
  }

  return res;
} // T:O(n) S:O(n)

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
