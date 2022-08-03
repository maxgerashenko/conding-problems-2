// Frequency Stack (hard)
//
// https://www.educative.io/courses/grokking-the-coding-interview/Y5zDWlVRz2p

// Design a class that simulates a Stack data structure, implementing the following two operations:
// push(int num): Pushes the number ‘num’ on the stack.
// pop(): Returns the most frequent number in the stack. If there is a tie, return the number which was pushed later.

class Heap {
  constructor(sort, filter = () => () => true) {
    this.arr = [];
    this.push = (el) =>
      (this.arr = [...this.arr.filter(filter(el)), el].sort((a, b) =>
        sort(a, b)
      ));
    this.pop = () => this.arr.shift();
  }
}
class FrequencyStack {
  constructor() {
    this.hashMapCount = {};
    this.index = -1;
    this.maxHeap = new Heap(
      (x, y) => (y.count === x.count ? x.index - y.index : y.count - x.count),
      ({ num: newNum }) =>
        ({ num: curNum }) =>
          newNum !== curNum
    );
  }
  push(num) {
    this.hashMapCount[num] =
      this.hashMapCount[num] != null ? this.hashMapCount[num] + 1 : 1; // init hash map count
    this.index++;
    this.maxHeap.push({
      num,
      index: this.index,
      count: this.hashMapCount[num],
    });
  }
  pop() {
    let { num } = this.maxHeap.pop();
    this.hashMapCount[num]--;
    if (this.hashMapCount[num] == 0) {
      delete this.hashMapCount[num];
      return num;
    }
    this.maxHeap.push({
      num,
      index: this.index,
      count: this.hashMapCount[num],
    });
    return num;
  }
} // T:O(logN) S:O(N)
