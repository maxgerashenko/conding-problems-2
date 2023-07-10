// https://leetcode.com/problems/lru-cache/
// LL_3_LRU_Cache

// Use LL as Least recent
// Use dummy nodes first last
// remove is X crosing
// Get is update, remove insert
// Put is insert
// If exsit remove add cap, than isert and
// Each run T:(1) total S:O(N)

class Node {
  val;
  key;
  pre;
  next;
  constructor(key, val) {
    this.key = key;
    this.val = val;
  }
}

class LRUCache {
  hashMap = {};
  cap;
  first;
  last;
  constructor(capacity: number) {
    this.cap = capacity;
    this.first = new Node(0, 0);
    this.last = new Node(0, 0);
    this.first.next = this.last;
    this.last.pre = this.first;
  }
  remove(node) {
    node.pre.next = node.next;
    node.next.pre = node.pre;
  }
  insert(node) {
    this.last.pre.next = node;
    node.pre = this.last.pre;
    node.next = this.last;
    this.last.pre = node;
  }

  get(key: number): number {
    console.log(this.hashMap);
    if (!(key in this.hashMap)) return -1;
    this.remove(this.hashMap[key]);
    this.insert(this.hashMap[key]);
    return this.hashMap[key].val;
  }

  put(key: number, val: number): void {
    let node = new Node(key, val);
    if (key in this.hashMap) {
      this.remove(this.hashMap[key]);
      this.cap++;
    }
    this.hashMap[key] = node;
    this.insert(node);
    this.cap--;
    if (this.cap >= 0) {
      console.log(this.hashMap);
      return;
    }
    let LRU = this.first.next;
    this.remove(LRU);
    delete this.hashMap[LRU.key];
    console.log(this.hashMap);
  }
}
