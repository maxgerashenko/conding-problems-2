// Pacific Atlantic Water Flow
// https://leetcode.com/problems/pacific-atlantic-water-flow/description/

function pacificAtlantic(heights: number[][]): number[][] {
    if(!heights) return [];
    let pas = new Set();
    let atl = new Set();
    function dfs(j, i, vis, pre = 0) {
        if(heights[j] == null
        || heights[j][i] == null
        || vis.has(j+','+i)
        || heights[j][i] < pre) return;

        vis.add(j+','+i);
        dfs(j+1, i, vis, pre = heights[j][i]);
        dfs(j-1, i, vis, pre = heights[j][i]);
        dfs(j, i+1, vis, pre = heights[j][i]);
        dfs(j, i-1, vis, pre = heights[j][i]);
    }

    for(let index = 0; index < heights.length; index++){
        dfs(0, index, pas);
        dfs(index, 0, pas);
        dfs(index, heights.length-1, atl);
        dfs(heights.length-1, index, atl);
    }

    const res = [];
    for(let el of pas)
        if(atl.has(el)) res.push((el as String).split(','));

    return res;
};
// T:O(M*N) S:O(N^2) to store the list[][],
// T:O(M + N) S:O(N^2)
// call stack N to visit all nodes, and N to store all visited
// dfs T:O(M+N) call stack, S:O(M+N) set