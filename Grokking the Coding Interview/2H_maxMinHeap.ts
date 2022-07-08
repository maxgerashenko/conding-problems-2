class Heap {
  constructor(sort) {
    this.arr = [];
    this.sort = sort;
  }

  push(value) {
    this.arr.push(value);
    this.arr.sort(this.sort);
  }

  pop() {
    return this.arr.shift();
  }
  get len() {
    return this.arr.length;
  }
  get val() {
    return this.arr[0];
  }
}

class Heap {
  constructor(isMax = false) {
    this.isMax = isMax;
    this.arr = [];
  }

  isSwap(m, n) {
    return this.isMax ? this.arr[m] < this.arr[n] : this.arr[m] > this.arr[n];
  }

  swap(n, m) {
    [this.arr[n], this.arr[m]] = [this.arr[m], this.arr[n]];
  }

  parent(n) {
    if (n < 3) return 0;

    return Math.floor((n - 1) / 2);
  }

  up(n = this.arr.length - 1) {
    let parent = this.parent(n);
    if (this.isSwap(parent, n)) {
      this.swap(n, parent);
      this.up(parent);
    }
  }

  push(el) {
    this.arr.push(el);
    this.up();
  }

  left(n) {
    return n * 2 + 1;
  }

  right(n) {
    return n * 2 + 2;
  }

  down(n = 0) {
    let left = this.left(n);
    let right = this.right(n);
    let maxMin =
      this.isSwap(right, left) || this.arr[right] == null ? left : right;

    if (this.isSwap(n, maxMin)) {
      this.swap(maxMin, n);
      this.down(maxMin);
    }
  }

  pop() {
    this.swap(0, this.arr.length - 1);
    let maxMin = this.arr.pop();

    this.down();

    return maxMin;
  }

  length() {
    return this.arr.length;
  }

  value() {
    return this.arr[0];
  }

  delete(el) {
    let n = this.arr.indexOf(el);
    let last = this.arr.length - 1;
    this.swap(n, last);
    this.arr.pop();

    this.down(n);
  }
}
