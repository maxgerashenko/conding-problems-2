// https://leetcode.com/problems/implement-trie-prefix-tree/description/
// Implement Trie (Prefix Tree)

class TrieNode{
    nodes = {};
    isEnd? = false;
}
class Trie {
    root = new TrieNode();
    constructor() {}

    insert(word: string): void {
        let letters = word.split('');
        let cur = this.root;
        for(let letter of letters){
            cur.nodes[letter] ??= new TrieNode();
            cur = cur.nodes[letter];
        }
        cur.isEnd = true;
    }

    search(word: string): boolean {
        let letters = word.split('');
        let cur = this.root;
        for(let letter of letters){
            if(cur.nodes[letter] == null) return false;
            cur = cur.nodes[letter];
        }
        return cur.isEnd;
    }

    startsWith(prefix: string): boolean {
        let letters = prefix.split('');
        let cur = this.root;
        for(let letter of letters){
            if(cur.nodes[letter] == null) return false;
            cur = cur.nodes[letter];
        }
        return true;
    }
} // T:O(N) S:O(N)

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */