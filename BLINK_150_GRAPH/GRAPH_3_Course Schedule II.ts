// https://leetcode.com/problems/course-schedule-ii/
//
// Course Schedule II

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const preListMap: number[][] = Array.from({ length: numCourses }, () => []);
    const visited = new Set<number>();
    const path = new Set<number>(); // To detect cycles

    // Initialize adjacency list
    for (const [post, pre] of prerequisites) {
        preListMap[post].push(pre);
    }

    const res: number[] = [];

    // Depth-First Search
    function dfs(i: number): boolean {
        if (visited.has(i)) return true; // Already processed this node
        if (path.has(i)) return false; // Cycle detected

        path.add(i); // Mark node in the current DFS path

        for (const pre of preListMap[i]) {
            if (!dfs(pre)) return false; // Cycle detected
        }

        path.delete(i); // Remove from path after processing
        visited.add(i); // Mark node as processed
        res.push(i); // Add node to result after processing its prerequisites

        return true;
    }

    // Perform DFS for all nodes
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return []; // If a cycle is detected, return an empty array
    }

    return res.length === numCourses ? res : [];
}; // T: O(V + E), S: O(V + E)