// https://leetcode.com/problems/min-stack/
// Min Stack

// 2 stack val and min
// covers the case -2 0 -2
// covers not only adding but removing with O(1) for getMin

class MinStack {
  valStack = [];
  minStack = [];
  constructor() {}

  push(val: number): void {
    this.valStack.push(val);
    let min =
      this.minStack.length > 0
        ? Math.min(val, this.minStack.slice(-1)[0])
        : val;
    this.minStack.push(min);
  }

  pop(): void {
    this.minStack.pop();
    return this.valStack.pop();
  }

  top(): number {
    if (this.valStack.length === 0) return null;
    return this.valStack.slice(-1)[0];
  }

  getMin(): number {
    return this.minStack.slice(-1)[0];
  }
} // T:O(1) read, add, min S:O(1)
