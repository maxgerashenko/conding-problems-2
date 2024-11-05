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

// Graphs ADV
//
// PRISM = BFS + MINHEAP + Visited
// index as visited
//
// Min Cost to Connect All Points - PRISM T:O(N^2 log N) S:O(N^2)

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



