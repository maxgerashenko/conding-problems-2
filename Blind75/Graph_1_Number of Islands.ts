// https://leetcode.com/problems/number-of-islands/description/
// Number of Islands

function numIslands(grid: string[][]): number {
    if(grid.length === 0 ) return 0;
    let visited = new Set();
    function bfs(j,i){
        let quque = [[j,i]];
        while(quque.length > 0){
            let [j,i] = quque.shift();
            if(grid[j] == null 
            || grid[j][i] == null 
            || visited.has(j+','+i) 
            || grid[j][i] === '0') continue;
            visited.add(j+','+i);
            quque.push([j+1,i], [j-1,i], [j,i+1], [j,i-1]);
        }
    }
    let count = 0;
    for(let j=0;j<grid.length;j++)
        for(let i=0;i<grid[j].length;i++){
            if(visited.has(j+','+i) || grid[j][i] === '0') continue;
            bfs(j,i);
            count++;
            console.log('+++',j,i)
        }
    
    return count;
}; // T:O(M*N) S:O(M*N)