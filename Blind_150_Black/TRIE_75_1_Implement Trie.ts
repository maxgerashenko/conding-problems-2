// https://leetcode.com/problems/implement-trie-prefix-tree/description/
// Implement Trie (Prefix Tree)

// use DFS
// each node is a letter
// ease node has isEnd
// if isEnd is a word
// if letter exist then is StartWith
// T:O(n) S:O(n)

class Node {
  isEnd = false;
}

class Trie {
  root = new Node();
  constructor() {}

  insert(word: string): void {
    let chars = word.split('');
    let cur = this.root;
    while (chars.length) {
      let char = chars.shift();
      if (!cur[char]) {
        cur[char] = new Node();
      }
      cur = cur[char];
    }
    cur.isEnd = true;
  }

  search(word: string): boolean {
    let chars = word.split('');
    let cur = this.root;
    while (chars.length) {
      let char = chars.shift();
      if (!cur[char]) return false;
      cur = cur[char];
    }
    return cur.isEnd;
  }

  startsWith(prefix: string): boolean {
    let chars = prefix.split('');
    let cur = this.root;
    while (chars.length) {
      let char = chars.shift();
      if (!cur[char]) return false;
      cur = cur[char];
    }
    return true;
  }
} // T:O(n) S:O(n)
