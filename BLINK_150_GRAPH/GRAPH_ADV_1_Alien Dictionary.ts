// https://www.lintcode.com/problem/892/
//
// Alien Dictionary

// Topological Sort
// Set for adjList
// Count for post
// pre + post to find post in 2 words
// 2 conner cases
// DFS + level + result
class Solution {
    foreignDictionary(words) {
        const adjListPostMap = {};
        const postCountMap = {};

        for (const word of words)
            for (let letter of word) {
                adjListPostMap[letter] = new Set();
                postCountMap[letter] = 0;
            }

        for (let index = 0; index < words.length - 1; index++) {
            let w1 = words[index], w2 = words[index + 1];
            let minLen = Math.min(w1.length, w2.length);
            if (w1.length > w2.length &&
                w1.slice(0, minLen) === w2.slice(0, minLen)) {
                return "";
            } // conner case
            for (let j = 0; j < minLen; j++) {
                const [pre, post] = [w1[j], w2[j]];
                if (pre == post) continue;
                if (!adjListPostMap[pre].has(post)) {
                    adjListPostMap[pre].add(post);
                    postCountMap[post] += 1;
                }
                break;
            }
        }

        const level = new Queue();
        for (let letter in postCountMap) {
            if (postCountMap[letter] > 0) continue;
            level.push(letter);
        }

        const res = [];
        while (level.isEmpty() == false) {
            const letter = level.pop();
            res.push(letter);
            for (let post of adjListPostMap[letter]) {
                postCountMap[post] -= 1;
                if (postCountMap[post] > 0) continue;
                level.push(post);
            }
        }

        return (res.length !== Object.keys(postCountMap).length)
            ? ""
            : res.join("");
    }
} // T:O(N+V+E) S:O(O(V+E)) v = 26