// https://leetcode.com/problems/network-delay-time/submissions/1417792705/
// 
// Network Delay Time


// FORD BFS 
// Result array with min values
// Visited with Infinity
// Return max value
// use tmp value as level
function networkDelayTime(times: number[][], n: number, start: number): number {
    let resulMinDelay = Array(n + 1).fill(Infinity);
    resulMinDelay[start] = 0; // start

    for (let i = 1; i < n; i++) {
        const level = [...resulMinDelay];
        for (let [from, to, delay] of times) {
            if (resulMinDelay[from] == Infinity) continue;

            level[to] = Math.min(level[to], resulMinDelay[from] + delay);
        }

        resulMinDelay = level;
    }

    const max = Math.max(...resulMinDelay.slice(1)); // index starts from 1
    return max === Infinity ? -1 : max; // conner case
}; // T:O(V+E) S:O(V)