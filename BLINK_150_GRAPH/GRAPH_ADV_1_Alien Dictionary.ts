// https://www.lintcode.com/problem/892/
//
// Alien Dictionary


// Topological Sort
// BFS
// Adjacency list
// Set for unique
alienOrder(words: string[]): string {
    const letterMapList = {};
    let letters = new Set();
    let letterMapCount = {};
    let len = words.length;

    // init maps with empty values
    for (let word of words) {
        for (let letter of word.split('')) {
            if (letterMapList[letter] == null) {
                letterMapList[letter] = new Set();
            }
            letters.add(letter);
            if (letterMapCount[letter] == null) {
                letterMapCount[letter] = 0;
            }
        }
    }

    // get Adjacency list
    for (let j = 0; j < len - 1; j++) {
        const cur = words[j];
        const next = words[j + 1];
        const min = Math.min(cur.length, next.length);

        for (let i = 0; i < min; i++) {
            const a = cur[i];
            const b = next[i];
            if (a === b) continue;
            letterMapList[a].add(b); // after list
            letterMapCount[b]++; // how many times letters before
            break;
        }
    }

    // init queue with letter with 0 pre
    let queue = [];
    for (let letter of letters) {
        if (letterMapCount[letter] > 0) continue;
        queue.push(letter);
    }

    // get res and update queue
    let res = [];
    while (queue.length > 0) {
        let letter = queue.shift();
        res.push(letter);

        for (let post of letterMapList[letter]) {
            letterMapCount[post]--;

            if (letterMapCount[post] > 0) continue;
            queue.push(post);
        }
    }

    return res.length === letters.size ? res.join('') : "";
} // T:O(V) S:O(V+E) v = 26