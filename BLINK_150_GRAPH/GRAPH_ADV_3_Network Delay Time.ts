// https://leetcode.com/problems/network-delay-time/submissions/1417792705/
// 
// Network Delay Time

// BFS
// Ford
function networkDelayTime(times: number[][], n: number, start: number): number {
    let minNodes = Array(n+1).fill(Infinity);
    minNodes[0] = 0;
    minNodes[start] = 0; // mark as visited

    for (let i = 0; i < n; i++) {
        const tmp = [...minNodes];
        for (let [from, to, time] of times) {
            if (minNodes[from] == Infinity) continue; // ignore visited nodes

            tmp[to] = Math.min(tmp[to], tmp[from] + time); // mark as visited
        }
        minNodes = tmp; // update for the next level
    }


    return minNodes.some(time => time == Infinity) ? -1 : Math.max(...minNodes);
}; // T:O(V+E) S:O(V)