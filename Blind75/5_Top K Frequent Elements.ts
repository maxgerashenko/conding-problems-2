// hashMapCount + MaxHeap

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
};

// O(KlogN) S:O(m), k amount, n-total, m-distinkt numbers


// hashMapCount + Bucket sort
var topKFrequent = function(nums, k) {
    if(nums.length === 0) return [];
    if(k >= nums.length) return nums;

    let mapCount = {};
    let pre = null;
    for(let num of nums){
        if(mapCount[num] == null) {
            mapCount[num] = 0;
        }
        mapCount[num]++;
    }
    let bucketSort = [];
    for(let [key, value] of Object.entries(mapCount)){
        if(bucketSort[value] == null){
            bucketSort[value] = [];
        } 
        bucketSort[value].push(key);
    }
    console.log(bucketSort);
    const result = [];
    let index = nums.length;
    while(k>0 && index > 0){
        if(!bucketSort[index] || bucketSort[index].length === 0) {
            index--;
            continue;
        }
        result.push(bucketSort[index].pop());
        k--;
    }

    return result;
};

// T O(n) S:(m)