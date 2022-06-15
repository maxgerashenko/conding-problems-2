// https://www.educative.io/courses/grokking-the-coding-interview/gx6oKY8PGYY
//
// Maximum Distinct Elements

const find_maximum_distinct_elements = function (nums, k) {
  // catch error
  if (k >= nums.length) return 0; // conner case
  let distCount = 0;
  let mapCount = getMapCount(nums);
  let distinct = Object.keys(mapCount);
  let min = new Heap();
  for (let num of distinct) {
    let count = mapCount[num];
    if (count === 1) {
      distCount++;
      continue;
    }
    min.push({ num, count });
  }
  while (k > 0 && min.arr.length > 0) {
    k -= min.pop().count - 1;
    if (k > 0) distCount++; // last element
  }

  return k > 0 ? distCount - k : distCount; // k could be < 0
}; // T:O(N + NlogN + KlogK) S:(N)

function getMapCount(arr) {
  const map = {};
  for (let el of arr) {
    map[el] = map[el] ? map[el] + 1 : 1;
  }
  return map;
}

class Heap {
  constructor(isMax = false) {
    this.arr = [];
    this.sort = isMax
      ? (a, b) => b.count - a.count
      : (a, b) => a.count - b.count;
  }
  push(el) {
    this.arr.push(el);
    this.arr.sort(this.sort);
  }
  pop() {
    let tmp = this.arr.shift();
    this.arr.sort(this.sort);
    return tmp;
  }
}
