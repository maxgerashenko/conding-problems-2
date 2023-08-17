// https://leetcode.com/problems/top-k-frequent-elements/description/
// Top K Frequent Elements

// use bucket list
// use hashMapCount
// the bucket list is the max size of n
// T:O(n) S:O(n)
// Better than T:O(klogn) with MaxHeap

function topKFrequent(nums: number[], k: number): number[] {
  let hasMapCount = {};
  let res = [];
  let n = nums.length;
  let bucketList = Array(n)
    .fill(null)
    .map((el) => []);

  for (let el of nums) {
    if (!hasMapCount[el]) {
      hasMapCount[el] = 0;
    }
    hasMapCount[el]++;
  }

  for (let val of Object.keys(hasMapCount)) {
    let count = hasMapCount[val];
    console.log(count, val);
    bucketList[count - 1].push(val);
  }

  for (let index = n - 1; index >= 0; index--) {
    if (res.length === k) return res;

    for (let el of bucketList[index]) {
      res.push(el);
    }
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
