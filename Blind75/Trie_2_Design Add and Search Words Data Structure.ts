// https://leetcode.com/problems/design-add-and-search-words-data-structure/description/
// Design Add and Search Words Data Structure

class TrieNode {
    val: string;
    nodes = {};
    isEnd = false;
}
class WordDictionary {
    root = new TrieNode();
    constructor() {}

    addWord(word: string): void {
        let letters = word.split('');
        let cur = this.root;
        for(let letter of letters){
            cur.nodes[letter] ??= new TrieNode();
            cur = cur.nodes[letter];
            cur.val = letter;
        }
        cur.isEnd = true;
    }

    search(word: string, cur = this.root): boolean {
        let letters = word.split('');
        for(let i=0;i<letters.length;i++){
            let letter = letters[i];
            if(letter === '.'){
                for(let node of Object.values(cur.nodes)){
                    if(this.search(word.slice(i+1), node as TrieNode)) return true;
                }
                return false;
            }
            if(cur.nodes[letter] == null) return false;
            cur = cur.nodes[letter];
        }
        return cur.isEnd;
    }
} // addWord T:O(L) S:O(L) search T:O(N) S:O(L)
