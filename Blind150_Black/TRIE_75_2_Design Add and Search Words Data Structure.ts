// https://leetcode.com/problems/design-add-and-search-words-data-structure/description/
// Design Add and Search Words Data Structure

// use DFS
// use TRIE
// use Node with childs
// use recurtion for search
// when '.' look to each node
// T:O(n) S:O(n)

class Node {
  isEnd = false;
  child = {};
}

class WordDictionary {
  root = new Node();
  constructor() {}

  addWord(word: string): void {
    let letters = word.split('');
    let cur = this.root;
    for (let char of letters) {
      if (!cur.child[char]) {
        cur.child[char] = new Node();
      }
      cur = cur.child[char];
    }
    cur.isEnd = true;
  }

  search(word: string, cur = this.root): boolean {
    let letters = word.split('');
    while (letters.length) {
      let char = letters.shift();
      if (char === '.') {
        for (let next of Object.values(cur.child)) {
          if (this.search(letters.join(''), next as Node)) return true;
        }
        return false;
      }
      if (!cur.child[char]) return false;
      cur = cur.child[char];
    }
    return cur.isEnd;
  }
} // T:O(n^2) S:O(n)

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
