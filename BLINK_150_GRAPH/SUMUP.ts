// A&H
//
// Set()
// LettersCountMap()
// Array(26) - 91 signature
// Prefix and sufix in revered order
// MinHeap() with max K values
//
//
// Contains Duplicate - Set() for duplicates
// Valid Anagram - LetterCountMap() to count word letters
// Two Sum - use restOfTargetMap to find a tager
// Group Anagrams - Use word signature as lettersCountArray(26) + AnagramsSet
// Encode and Decode Strings - Use word length in encoded string of words "#5word1#3one"
// Product of Array Except Self - cal prefix in order and sufix in reversed order and get result T:O(N) S:O(1)
// Longest Consecutive Sequence - use Set() and start looking for a sequence from existing nubmers T:O(N) S:O(N)
// Valid Sudoku - use Set() for rows, cols, blocks as box-${~~(i / 3)}-${~~(j / 3)}-${num}

// 2P
//
// start end
// sort for duplicates
// sort for tager
// start on left and end on the right, use greedy
// start on lef and end on the right, but calculate the local max/min
//
// Valid Palindrome - while start < end start++ end--;
// 3Sum - to 0, sort, for duplicates and search, start and end on the right, seach with start, end, sorted
// Container With Most Water - start on left and end on right, update max and move smaller hight to the middle
// Two Sum II - Input Array Is Sorted - start on left and end on right move to the middle while not equal target
// Trapping Rain Water - left to left right to right, mesure each col for total += minHeight - cur

// SW
//
// left right
// Set() for duplicates
// Use queue[0] as max, use index for the queue, keep queue small
// Use signature for 26 letters array, compare signatures (Frequency Map)
// Frequency Map
// DequeIndex, remove from the back if el > last, add el if smaller, remove el if index < k
// Frequensy Count index, move +1 and -1, then if is enought
//
// Best Time to Buy and Sell Stock - swap [left and right] if right < left, increase right and update max // T:O(N) S:O(1)
// Longest Substring Without Repeating Characters - set + left right, update length
// Sliding Window Maximum - Use queue[0] as max, use index for queue, clean queue before adding new
// Permutation in String - 2 hash maps with array or map init pattern get window pattern every time
// Minimum Window Substring - Frequency Map, left right, increase window for the match, decrease for min value
// Longest Repeating Character Replacement -  Frequency Map + window + just need max char, by updating from new, update max length, move left when k is exided

// ==========================================================

// Stack
//
// DFS
// Backtracking from path is stack
// monotonic stack (decreasing stack)
//
// Valid Parentheses - Stack add [ remove ] check conner cases, shold be 0 len at the end
// Min Stack - stack + minStack, when stackTop === minStackTop remove both
// Generate Parentheses - DFS Stack Backtracking - T:(2^2*n) S:O(2n)
// Daily Temperatures - monotonic stack, add when smaller, remove while bigger, use stack with indexes
// Car Fleet - Monotonic stack, sort by distance - T:O(nlogn) S:O(n)
// Evaluate Reverse Polish Notation - Put numbers to the stack, use last 2 numbers for symbols
// Largest Rectangle in Histogram - From left to right, Stack mono, {start, height},  cal the rest
// Basic Calculator - Stack for Number + Mono Stack for Operators + Priorityles for operators + Clean after ")" + double digit numbers

// Binary Search
//
// Search a 2D Matrix -
// Median of Two Sorted Arrays -
// Time Based Key-Value Store - Use MapArray use Binary search, don't sort and time is always increasing, use {value, timeStap pair}, binary search by the timeStampt T:O(log n) S:O(N)
// Koko Eating Bananas - Sort, start min ned max, find the pivit check with hours use binary search T:O(NlogN) S:O(1)
// Binary Search - Binary Search - while(start < end) return when pivit === start T:O(log n)  T:O(1)
// Search in Rotated Sorted Array - Split in half, ignore sored part. Repean until pivit === target otherwise return -1 T:O(log n) S:O(1)
// Find Minimum in Rotated Sorted Array - Split in half, ignore sored part. repeat until start === end T:O(log n) S:O(1)
//


// Linked List
//
// let pre = null;
// while (cur != null) {
//     let tmp = cur.next;
//     cur.next = pre;
//     pre = cur;
//     cur = tmp;
// }
//
//
// Floyd’s Cycle Detection
// Fast and Slow, meeting point, start + 1 and metting point + 1, when equal is a meeting point
//
// Add Two Numbers - reversed, remember digit in > 9 number, return in reversed order
// Reverse Nodes in k-Group - dummy, prevEnd, Start, End, nextStart. calculate end & nextStart = end.next
// LRU Cache - Double linked list, with limited nodes, move to head remove tail
// Find the Duplicate Number -  Floyd’s Cycle Detection T:O(N) S:O(1)
// Copy List with Random Pointer - Create a copies of all nodes. Create new head and put copies for each node
// Merge k Sorted Lists - MinHeap T:O(NlogK) S:O(K) instead of T:O(N^2)
// Linked List Cycle - fast && slow, slow should get to the end end never meet fast
// Remove Nth Node From End of List - Reverse, count nth element, remove, reverse
// Reorder List - Fast and slow to find middle, reverse second part, merge 2 lists  T:O(n) S:O(1)
// Merge Two Sorted Lists - l1, l2, new StartNode, move l1 or l2, clean last node at the end => return startNode.next;  T:O(n) S:O(1)
// Reverse Linked List - cur.next = pre; pre = cur; cur = tmp; T:O(n) S:O(1)

// ==========================================================

// Graphs ADV
//
// MST PRISM = BFS + MINHEAP + Visited + dir
// FORD = BFS + resultsByIndex[] + level[] + Infinity as visited
// Topological Sorting = adjListMap + countMap + DFS + queue
// index as visited
// adjList + Set()
//
// Min Cost to Connect All Points - PRISM T:O(N^2 log N) S:O(N^2)
// Cheapest Flights Within K Stops - BFS + ADJLIST + Path with current Cost + Cost[]
// Cheapest Flights Within K Stops - FOR, like BFS, use cost[] but check all exept marked as visted
// Swim in Rising Water - BFS + HEAP + Visted + dir
// Network Delay Time - FORD DFS minDelay[] + Infinity as visited + array as level
// Reconstruct Itinerary - DFS post order - reverse
// Alien Dictionary = TopologicalSort + AdjList with Sort


// Graphs
//
// Reverse - start from the border
// Adj List
// BFS for shortest path
// Topoligical Sort = AdjListPost + CountPre + BFS
// DFS post order + reverse + visitedSet + cycleSet
// Union Find = Find ther root + Union with rank, update rank if rank is equal
//
// Redundant Connection - Union Find for not directed grap, Check if node has the same root
// Surrounded Regions - Reverse - BFS border - repaint border and unpaint islands T:O(M*N) S:O(m*n)
// Word Ladder - BFS + Adj List + visited  T:O(N × L) S:O(N+L)
// Course Schedule II - Topoligical Sort T:O(V + E) S:O(V + E)
// Course Schedule II - DFS post order + reverse + visitedSet + cycleSet T:O(V+E) S:O(V+E)
// Walls and Gates - BFS from gates  T:O(m × n) S:O(m × n)
// Max Area of Island - BFS from each + visited T:O(m*n) S:O(m*n)
// Graph Valid Tree - DFS try to visit all nodes with out a cycle, ignore parent T:O(V+E) S:O(V+E)
// The Number of Connected Components in an Undirected Graph -
// adjlist + DFS + visted, count not visited from all
// The Number of Connected Components in an Undirected Graph - Union Find and ignore if union is true
// Course Schedule - DFS post order + adjList, return false if cycle or not all nodes visited
// Course Schedule - Topological sort postAdjList + preCount
// Pacific Atlantic Water Flow - BFS twice T:O(n*m) S:O(m*n)
// Clone Graph - DFS T:O(V + E) S:O(V) stack is the limit/ BFS T:O(V + E) S:O(V)
// Number of Islands - DFS or BFS T:O(m × n) S:O(m × n)

// ==========================================================


// DYN
// 
// Distinkt paths i=0, pre = 1, pre = pre + pre2;
// Max value i = 1, pre2 = 0; pre = el[0], pre = Math.max(pre, prev2 + el[i])
// Min value i = 2, pre2 = el[0]; pre= el[1]; pre = min(pre + cost[i], pre2 + cost[i]);
//
// Matrix options X targets, use rest as index to navigate, sort options
//
// if cycle calculate twice
//
// Climbing Stairs - pre = 0 cur = 0; i[0] = pre + cur T:O(N) S:O(1)
// House Robber - pre2 = 0, pre = 0; cur = max( cur + pre2, prev  ) T:O(N) S:O(1)
// House Robber II - Calc twice, pre2 pre, pre = max( cur + pre2, prev  ) T:O(N) S:O(1)
// Longest Palindromic Substring - expand from the center, twice for even and odd T:O(n) S:O(1)
// Palindromic Substrings - expand from the center, twice for even and odd T:O(n) S:O(1)
// Decode Ways - pre + prev2; prev2 = 0 as empty; pre = str[0] = "0" : 0 : 1; cur += pre amd cur += pre2 T:O(n) S:O(1)
// Coin Change - Matrix min combination, sort coins mathrix coins X tagets
// Maximum Product Subarray - max, udpate max(cur, cur * max, min * cur); - * - = +, so update min
// Word Break - Check all substings with dp start, end. dp[i] === true when before is correct, by dp[start] && str[start, end).has(any word)
// Longest Increasing Subsequence - dp each with each dp[i] = max(dp[i], dp[i] + (dp[pre])
// Min Cost Climbing Stairs - pre = el[0]; cur= el[1] i = 1, cur = min(cur + cost[i], pre + cost[i]); pre = tmp
// Partition Equal Subset Sum - dp[target / 2], if odd ignore, iterate for target-- with nums where dp[i-num] should be true to to set it true return dp[target/2]

// ==========================================================

// BIT
// ^= xor twice to find single digit
// &1 to get single bit
// ^= + & << to sum

// MATH
// % 10 and ~~(x/10) get sing digit from number
// Matrix with 2 steps + TMP for the coner
// split x^n in laft to get logN
// product of each digit to [52] of array, the carry
// square use diagonals + 2 dots and points count Map * to get resuslt

// INTERVALS
// sort start + heap end and clen to get max count
// sort start + heap by len and clean heap by end < start

// GREEDY
// count for () and * wildcard 2 directions or minValue + maxValue and reset for min
// if sum is < 0 return -1 if count < 0 reset the start
// mapCount = {}, consecutive numbers
// jump from left to right min of cur or l + 1, BFS
// move target to left as right is valid
// sum += left if left < 0 or sum < 0 sum -= left

// DP2
// DFS + CASH + Variaions with 2 pointers
