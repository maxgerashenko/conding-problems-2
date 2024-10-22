// https://leetcode.com/problems/word-ladder/
//
// Word Ladder



// bfs
// adjecency list
// visited
function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    const combListMap: { [key: string]: string[] } = {};

    if (!wordList.includes(endWord)) return 0; // conner case

    // init combListMap
    wordList.push(beginWord); // adds begin word
    for (let word of wordList) {
        for (let i = 0; i < word.length; i++) {
            const combStr = word.slice(0, i) + '*' + word.slice(i + 1);

            if (combListMap[combStr] == null) {
                combListMap[combStr] = [];
            }

            combListMap[combStr].push(word);
        }
    }

    // BFS
    let levelCount = 1; // fix index
    const visited = new Set();
    let level = [beginWord];

    while (level.length > 0) {
        let tmp = [];
        for (let start of level) {
            if (start === endWord) return levelCount;

            for (let i = 0; i < start.length; i++) {
                let comb = [...start.split('')];
                comb[i] = '*';
                let words = combListMap[comb.join('')] || [];

                for (let word of words) {
                    if (visited.has(word)) continue;
                    tmp.push(word);
                    visited.add(word); // don't visit twice on on one level
                }
            }
        }
        levelCount++;
        level = tmp;
    }

    return 0; // end word never reached
}; // T:O(M^2*N) S:O(M^2*N)