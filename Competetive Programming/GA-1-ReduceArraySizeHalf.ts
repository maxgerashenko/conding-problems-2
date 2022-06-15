// #2 Implement this next!!!!!

// Reduce Array Size to The Half
// https://leetcode.com/problems/reduce-array-size-to-the-half/

// THRE IS ANOTHER FASTER SOLUTION

// https://codeburst.io/how-to-create-a-priority-queue-with-javascript-c56a970f29a8
class MaxHeap {
  _q = [];
  root = null;
  add(el) {
    this._q.push(el);
    let i = this._q.length - 1;
    while (i > 0 && this._q[i].val > this._q[~~((i - 1) / 2)].val) {
      [this._q[i], this._q[~~((i - 1) / 2)]] = [
        this._q[~~((i - 1) / 2)],
        this._q[i]
      ];
      i = ~~((i - 1) / 2);
    }
    this.root = this._q[0];
  }
  get() {
    let max = this._q[0];

    [this._q[0], this._q[this._q.length - 1]] = [
      this._q[this._q.length - 1],
      this._q[0]
    ];
    this._q.pop();
    this._heapify(0);

    return max;
  }
  _heapify(index) {
    let max = index;

    if (
      2 * index + 1 < this._q.length &&
      this._q[2 * index + 1].val > this._q[max].val
    ) {
      max = 2 * index + 1;
    }

    if (
      2 * index + 2 < this._q.length &&
      this._q[2 * index + 2].val > this._q[max].val
    ) {
      max = 2 * index + 2;
    }

    if (index === max) return;
    [this._q[max], this._q[index]] = [this._q[index], this._q[max]];
    if (index === 0) {
      this.root = this._q[0];
    }

    this._heapify(max);
  }
}

/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] == null) {
      map[arr[i]] = 0;
    }
    map[arr[i]]++;
  }

  let priorityQueue = new MaxHeap();
  for (let i in map) {
    priorityQueue.add({ el: +i, val: map[i] });
  }

  let res = 0,
    curLength = arr.length;
  while (curLength > ~~(arr.length / 2)) {
    let el = priorityQueue.get();
    curLength -= el.val;
    res++;
  }

  console.log(priorityQueue);

  return res;
};
