class Heap {
  constructor(isMax) {
    this.array = [];
    this.isMax = isMax;
  }

  push(value) {
    this.array.push(value);
    this.array.sort((a, b) => a - b);
  }

  pop() {
    return this.isMax ? this.array.pop() : this.array.shift();
  }

  value() {
    return this.isMax ? this.array[this.array.length - 1] : this.array[0];
  }

  length() {
    return this.array.length;
  }
}

class Heap {
  constructor(isMax = false) {
    this.isMax = isMax;
    this.array = [];
  }

  isSwap(m, n) {
    return this.isMax
      ? this.array[m] < this.array[n]
      : this.array[m] > this.array[n];
  }

  swap(n, m) {
    [this.array[n], this.array[m]] = [this.array[m], this.array[n]];
  }

  parent(n) {
    if (n < 3) return 0;

    return Math.floor((n - 1) / 2);
  }

  up(n = this.array.length - 1) {
    let parent = this.parent(n);
    if (this.isSwap(parent, n)) {
      this.swap(n, parent);
      this.up(parent);
    }
  }

  push(el) {
    this.array.push(el);
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
      this.isSwap(right, left) || this.array[right] == null ? left : right;

    if (this.isSwap(n, maxMin)) {
      this.swap(maxMin, n);
      this.down(maxMin);
    }
  }

  pop() {
    this.swap(0, this.array.length - 1);
    let maxMin = this.array.pop();

    this.down();

    return maxMin;
  }

  length() {
    return this.array.length;
  }

  value() {
    return this.array[0];
  }

  delete(el) {
    let n = this.array.indexOf(el);
    let last = this.array.length - 1;
    this.swap(n, last);
    this.array.pop();

    this.down(n);
  }
}

// with element
class Heap {
  constructor(isMax = false) {
    this.isMax = isMax;
    this.array = [];
  }

  isSwap(m, n) {
    if (this.array[m] == null || this.array[n] == null) return false;

    return this.isMax
      ? this.array[m].value < this.array[n].value
      : this.array[m].value > this.array[n].value;
  }

  swap(n, m) {
    [this.array[n], this.array[m]] = [this.array[m], this.array[n]];
  }

  parent(n) {
    if (n < 3) return 0;

    return Math.floor((n - 1) / 2);
  }

  up(n = this.array.length - 1) {
    let parent = this.parent(n);
    if (this.isSwap(parent, n)) {
      this.swap(n, parent);
      this.up(parent);
    }
  }

  push(el) {
    this.array.push(el);
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
      this.isSwap(right, left) || this.array[right] == null ? left : right;

    if (this.isSwap(n, maxMin)) {
      this.swap(maxMin, n);
      this.down(maxMin);
    }
  }

  pop() {
    this.swap(0, this.array.length - 1);
    let maxMin = this.array.pop();

    this.down();

    return maxMin;
  }

  length() {
    return this.array.length;
  }

  element() {
    return this.array[0];
  }

  delete(el) {
    let n = this.array.indexOf(el);
    let last = this.array.length - 1;
    this.swap(n, last);
    this.array.pop();

    this.down(n);
  }
}
