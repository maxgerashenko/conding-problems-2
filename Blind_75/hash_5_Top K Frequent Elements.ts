// https://leetcode.com/problems/top-k-frequent-elements/

// hashMapCount + MaxHeap

// calcute elements and put to the heap to not sort everything
// get to k elements from the heap

var topKFrequent = function (nums, k) {
  if (nums.length === 0) return [];
  if (k >= nums.length) return nums;
  nums.sort();
  let maxHeap = new Heap((a, b) => b.count - a.count);
  let mapCount = {};
  let pre = null;
  for (let num of nums) {
    if (mapCount[num] == null) {
      if (pre != null) {
        maxHeap.insert({ value: pre, count: mapCount[pre] });
      }
      pre = num;
      mapCount[num] = 0;
    }
    mapCount[num]++;
  }
  maxHeap.insert({ value: pre, count: mapCount[pre] });
  let result = [];
  while (k > 0) {
    let el = maxHeap.removeTop();
    if (el === null) break;

    result.push(el.value);
    k--;
  }
  return result;
}; // O(KlogN) S:O(n)

// hashMapCount + Bucket sort
// keep result in Array where index is a Count
// and value is array of element that has this count
// max length of the array will be all elements N
// take k lenents formt he index buckets as needed
var topKFrequent = function (nums, k) {
  if (nums.length === 0) return [];
  if (k >= nums.length) return nums;

  let mapCount = {};
  let pre = null;
  for (let num of nums) {
    if (mapCount[num] == null) {
      mapCount[num] = 0;
    }
    mapCount[num]++;
  }
  let bucketSort = [];
  for (let [key, value] of Object.entries(mapCount)) {
    if (bucketSort[value] == null) {
      bucketSort[value] = [];
    }
    bucketSort[value].push(key);
  }
  const result = [];
  let index = nums.length;
  while (k > 0 && index > 0) {
    if (!bucketSort[index] || bucketSort[index].length === 0) {
      index--;
      continue;
    }
    result.push(bucketSort[index].pop());
    k--;
  }

  return result;
}; // T O(n) S:(n)
