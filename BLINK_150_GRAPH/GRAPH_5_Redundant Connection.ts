// https://leetcode.com/problems/redundant-connection/
// 
// Redundant Connection


// UnionFind - FindRoot Union roots by Rank
function findRedundantConnection(edges: number[][]): number[] {
    const len = edges.length;
    const root = Array(len + 1).fill(0).map((_, i) => i);
    const rank = Array(len + 1).fill(1);

    function find(el: number): number {
        let par = root[el];
        while (par !== root[par]) {
            root[par] = root[root[par]]; // compress path
            par = root[par];
        }
        return par;
    }

    // Union with rank
    function union(a: number, b: number): boolean {
        const parA = find(a);
        const parB = find(b);

        if (parA === parB) return false; // Cycle detected

        // Union by rank
        if (rank[parA] >= rank[parB]) {
            root[parB] = parA;
            rank[parA] += rank[parB];
            return true
        }
        root[parA] = parB;
        rank[parB] += rank[parA];
        return true;
    }

    // Process edges
    for (const [a, b] of edges) {
        if (union(a, b) === false) return [a, b];
    }

    return [];
} // T:O(E+V) S:(V)

