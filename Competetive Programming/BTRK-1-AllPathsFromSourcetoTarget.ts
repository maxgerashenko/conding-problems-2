// BACK TRACKING
// https://epam.sharepoint.com/sites/CompetitiveProgramming/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FCompetitiveProgramming%2FShared%20Documents%2F08%2D22%2D2020%2FRecordings%2FMeeting%20in%20%5FBacktracking%5F%2D20210327%5F100719%2DMeeting%20Recording%2Emp4&parent=%2Fsites%2FCompetitiveProgramming%2FShared%20Documents%2F08%2D22%2D2020%2FRecordings

// Back Tracking - looking for all posible solutions
//    example: all posible combinations for 'AXZ', 6(3!=1*2*3) total with a Tree
// DFS           - special case of back tracking for search in tree structures

// 797. All Paths From Source to Target
// https://leetcode.com/problems/all-paths-from-source-to-target/

// Guaranteed Directed acyclic graph(DAG)

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  // Constraints
  // 2 <= graph.length <= 15
  // 0 <= graph[i][j] <= n

  let res = [];
  (function BT(path, index) {
    let nodes = graph[index];
    if (index === graph.length - 1) {
      res.push(path);
    }

    // as last node is empty
    // don't need to return
    for (let el of nodes) {
      BT([...path, el], el);
    }
  })([0], 0);

  return res;
};
