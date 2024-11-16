// Prim's: Minimum Spanning Tree, MinHeap, VisitedSet, AdjListMap, MinHeap as level
// Bellman-Ford: MinDistanceArray, AdjList , Infinity as visited, All E + visited as level
// Dijkstra's Algorithm: MinHeap, MinDistance, Visited, MinHeap as level
// Topological Sort: postAdjList, IndexCountArray, queque as a level
// Union-Find: 


// PRISM: Minimum Spanning Tree, ALL to ALL
//
// Input:
// undirected graph
// adjacency list or adjacency matrix
// start
// 
// Data Strcuturs:
// MinHeap()
// Visited Set()
// Adjacency List, with weights
//
// Cycle:
// Min-Heap as BFS
//
// Steps: 
// Start from start and mark as vistited
// Add Start End to the result
// Get all neigbors from Adjacency List
// check is visited
// Add to MinHeap as BFS level
// Repeat until all nodes are visited
//
// Limits: 
// No Directed Grahs
// All to All only MST Min Spaning Tree
//
// T:O(E log V) T:O(V + E)

// Bellman-Ford Algorithm - From START to ALL other nodes with negative wieghts and K Stops
// 
// Input: 
// Directed graph
// Start node
// 
// Data Strcuturs:
// Min distance Matrix/Array to each node from the start
// Use Infinity as not visited marker in minDist
// Edge List
// 
// Cycle:
// Iterate all Edges (START, END, WEIGHT)
// 
// Steps:
// Init MinDistance for Start as 0
// Check ALL EDGES 
// if minDist START is not INFINITY(not visited)
// then updaet minDist to END with Math.min(minDist, Start + Weigth)
// Detect negative cycle by Check ALL EDGES twice
// MinDistance array is the answer
//
// Limits:
// Slower than Dijkstra’s 
// not for graphs with many edges
// directed graphs only
//
// T:O(V * E) S:O(E) if edge list or O(V) for map


// Dijkstra's Algorithm: Shortest from START to End for directed not negative not k stops 
//
// Input: 
// Data Strcuturs:
// MinHEAP
// minDistance Array/Map
// Visited Set()
// Adjacency List Map{}
//
// Cycle:
// Like BFS MinHeap
//
// Steps:
// init min dist with Infinity
// init start min dist as 0
// while MinHeap()
// get min as current start check and marked as visited
// for each neighbor node cal new minDist
// if smaller update minDist
// add  neighbor to the MinHeap
// Repeat until min node is Final and visited
//
// Limits:
// not for detecting negative cycles
// Slow on dense graphs
//
// T:O((V + E) log V) S:O(V) as set or O(E) as []


// Topological Sort: Valid order in directed acyclic Graph
//
// Input:
// Adjacency list
//
// Data Strcuturs:
// BFS:
// - AdjacencyListMap{} with post
// - VertexPreCountMap{}
// - queue
// DFS
// - Visited Set
// - stack[]
// 
// Cycle:
// BFS - queue, with Vertex with 0 pre dependencies
// DFS - stack[], with reverse post-order
// 
// Steps BFS:
// Init queue[] with VertexPreCountMap === 0
// while queue is not empty
// Add node from queue to result
// Check all post neighbors
// post neighbors VertexPreCountMap -1
// if post neighbors VertexPreCountMap === 0 add to the queue[]
// return if all nodes included the result ELSE cycle '-1'
//
// Steps DFS:
// init visitedSet()
// pathSet() for cycle detection !!! 
// stack[] as a result 
// For unvisited nodes DFS()
// DFS, check the cycle in pathSet() !!! conner case
// DFS, check if visited return !!! base case 
// add to pathSet.add()
// add to visitedSet.add()
// DFS each neighbor for the AdjacencyListMap
// then post order remove pathStack
// add to result stack[].push()
// Return the stack[] in reversed order
//
// Limits:
// Directed acyclic only
// Multiple solutions
// not fot the path
//
// T:O(V + E) S:O(V + E)
