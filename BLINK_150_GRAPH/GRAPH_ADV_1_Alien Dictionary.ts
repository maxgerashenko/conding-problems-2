// https://www.lintcode.com/problem/892/
//
// Alien Dictionary


// Topological Sort
alienOrder(words: string[]): string {
    const res = [];
    const queue = [];
    const edgeMapList: { [key: string]: string[] } = {};
    const charMapCount: { [key: string]: number } = {};
    const letters = new Set<string>();

    // Initialize graph and in-degree count
    for (let word of words)
        for (let letter of word) {
            if (charMapCount[letter] != null) continue;
            charMapCount[letter] = 0;
            edgeMapList[letter] = [];
            letters.add(letter);
        }

    // Build the graph
    const len = words.length;
    for (let j = 0; j < len - 1; j++) {
        let a = words[j];
        let b = words[j + 1];

        const min = Math.min(a.length, b.length)
        for (let i = 0; i < min; i++) {
            if (a[i] === b[i]) continue;

            // Add an edge from a[i] to b[i] and increment in-degree of b[i]
            edgeMapList[a[i]].push(b[i]);
            charMapCount[b[i]]++;
            break;
        }
    }

    // Initialize the queue with letters having zero in-degree
    for (let letter of letters) {
        if (charMapCount[letter] > 0) continue;
        queue.push(letter);
    }

    // Topological sort using BFS
    while (queue.length > 0) {
        let next = queue.shift();
        res.push(next);

        for (let dep of edgeMapList[next]) {
            charMapCount[dep]--;
            if (charMapCount[dep] !== 0) continue;
            queue.push(dep);
        }
    }

    // If not all letters are processed, it means there is a cycle
    return res.length !== letters.size ? '' : res.join('');
}