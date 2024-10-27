// https://leetcode.com/problems/word-search-ii/
//
// Word Search II


// dfs
// trie;
// backtraing
// visited
function findWords(board: string[][], words: string[]): string[] {
    const trie = {};
    const dir = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    const [m, n] = [board.length, board[0].length];

    for (let word of words) {
        let cur = trie; // use obejct link
        let len = word.length;
        for (let letter of word) {
            if (cur[letter] == null) cur[letter] = {}; // init new node
            cur = cur[letter]; // update the link
        }
        cur = cur['word'] = word; // save word
    } // init trie;

    const res = new Set();
    function dfs(j, i, trieNode) {
        const letter = board[j][i];
        if (trieNode[letter] == null) return; // coner case

        if (trieNode[letter].word != null) res.add(trieNode[letter].word); // base case
        if (board[j][i] === '#') return; // check visited

        board[j][i] = '#'; // mark as visited

        for (let [dJ, dI] of dir) {
            let [newj, newI] = [j + dJ, i + dI];
            if (newj < 0 || newI < 0 || newj >= m || newI >= n) continue; // check boundaries
            dfs(newj, newI, trieNode[letter]);
        }

        board[j][i] = letter; // backtraing
    }

    for (let j = 0; j < m; j++)
        for (let i = 0; i < n; i++)
            dfs(j, i, trie);

    return [...res] as string[];
}; // T:S(n*m*4^L) S:O(!(m*n+w))