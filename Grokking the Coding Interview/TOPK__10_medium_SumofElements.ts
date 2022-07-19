// https://www.educative.io/courses/grokking-the-coding-interview/qVljv3Plr67
//
// Sum of Elements

const find_sum_of_elements = function (nums, k1, k2) {
  // (k1, k2) - not included
  // catch error
  if (k2 - k1 <= 0) return 0; // conner case

  const max = getMaxK(nums, k2 - 1);
  let sum = 0;
  for (let i = 0; i < k2 - 1 - k1; i++) {
    // k1] included
    sum += max.pop();
  }

  return sum;
}; // T: O(NlogK2 + KlogK2) => Nlogk2 S:O(K)

function getMaxK(nums, k) {
  const max = new Heap(true);
  for (let i in nums) {
    let num = nums[i];
    if (+i < k) {
      max.push(num);
      continue;
    }
    if (num >= max.arr[0]) continue;
    max.pop();
    max.push(num);
  }
  return max;
}

class Heap {
  constructor(isMax = false) {
    this.arr = [];
    this.sort = isMax ? (a, b) => b - a : (a, b) => a - b;
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
