console.clear();
class MaxBiaryHeap {
  constructor() {
    this.values = [];
  }
  getParentIdex(n) {
    return ~~((n - 1) / 2);
  }
  getChilderIndexes(n) {
    return [n * 2 + 1, n * 2 + 2];
  }
  insert(value) {
    // should push to the end
    // and buuble up the valye to the right place
    // right place is when parent is biger then child
    // so need to find the parent and compare
    // if it is smaller ned to swap
    // continue swappting till the children is biger that parent
    this.values.push(value);
    let childIndex = this.values.length - 1;
    let parentIndex = this.getParentIdex(childIndex);
    while (this.values[childIndex] > this.values[parentIndex]) {
      [this.values[childIndex], this.values[parentIndex]] = [
        this.values[parentIndex],
        this.values[childIndex]
      ];
      childIndex = parentIndex;
      parentIndex = this.getParentIdex(childIndex);
    }
    return this;
  }
  extractMax() {
    // Always remove from the head
    // and buuble down
    // and take the last element and set it as root
    // swap parent with the buggest child
    let parentIndex = 0,
      root = this.values.shift(),
      [left, right] = this.getChilderIndexes(parentIndex);
    this.values.unshift(this.values.pop());
    if (this.values.length === 0) return root;
    while (
      this.values[parentIndex] < this.values[left] ||
      this.values[parentIndex] < this.values[right]
    ) {
      this.values[left] > this.values[right]
        ? ([this.values[left], this.values[parentIndex]] = [
            this.values[parentIndex],
            this.values[left]
          ])
        : ([this.values[right], this.values[parentIndex]] = [
            this.values[parentIndex],
            this.values[right]
          ]);
      parentIndex = this.values[left] > this.values[right] ? left : right;
      [left, right] = this.getChilderIndexes(parentIndex);
    }
    return root;
  }
}
console.log("--- HEAP");
let maxBinaryHeap = new MaxBiaryHeap();
console.log("--- INSERT");
maxBinaryHeap
  .insert(41)
  .insert(39)
  .insert(33)
  .insert(18)
  .insert(27)
  .insert(12)
  .insert(55);
console.log(maxBinaryHeap.values);
console.log("--- EXTRACT");
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.values);
