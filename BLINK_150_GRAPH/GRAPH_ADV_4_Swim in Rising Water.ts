// https://leetcode.com/problems/swim-in-rising-water/
//
// Swim in Rising Water


// like BFS
function swimInWater(grid: number[][]): number {
    const dir = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    const len = grid.length;
    let max = 0;
    const visited = new Set();
    const minHeap = new Heap(([a1, a2], [b1, b2]) => grid[a1][a2] - grid[b1][b2]);
    minHeap.add([0, 0]);

    while (minHeap.heap.length > 0) {
        let [x, y] = minHeap.remove();

        if (visited.has(`${x},${y}`)) continue;
        visited.add(`${x},${y}`);

        max = Math.max(max, grid[x][y]);

        if (x === len - 1 && y === len - 1) break; // base case

        for (let [X, Y] of dir) {
            const newX = x + X;
            const newY = y + Y;
            if (newX < 0 || newX === len || newY < 0 || newY === len) continue; // out of boundary
            if (visited.has(`${newX},${newY}`)) continue;
            minHeap.add([newX, newY]);
        } // search for a new points;
    }

    return max; // max of min value to return 
}; // T:O(nlogN) S:O(n)

class Heap {
    heap = [];
    comp;
    constructor(comp = (a, b) => a - b) {
        this.comp = comp;
    }

    // Helper Methods
    leftIndex = (index) => 2 * index + 1;
    rightIndex = (index) => 2 * index + 2;
    parentIndex = (index) => Math.floor((index - 1) / 2);
    hasParent = (index) => this.parentIndex(index) >= 0;
    parent = (index) => this.heap[this.parentIndex(index)];
    // Functions to create Min Heap
    swap(indexA, indexB) {
        [this.heap[indexA], this.heap[indexB]] = [
            this.heap[indexB],
            this.heap[indexA],
        ];
    }
    peek = () => (this.heap.length === 0 ? null : this.heap[0]);

    // Removing an element will remove the
    // top element with highest priority then
    // heapifyDown will be called
    remove() {
        if (this.heap.length === 0) return null;
        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        return item;
    }
    add(item) {
        this.heap.push(item);
        this.heapifyUp();
    }
    heapifyUp() {
        let index = this.heap.length - 1;
        while (
            this.hasParent(index) &&
            this.comp(this.parent(index), this.heap[index]) > 0
        ) {
            this.swap(this.parentIndex(index), index);
            index = this.parentIndex(index);
        }
    }
    getNextIndex = (index) => {
        let leftIndex = this.leftIndex(index);
        if (this.heap[leftIndex] == null) return null;
        let rightIndex = this.rightIndex(index);
        if (this.heap[rightIndex] == null) return leftIndex;
        return this.comp(this.heap[leftIndex], this.heap[rightIndex]) < 0
            ? leftIndex
            : rightIndex;
    };
    heapifyDown() {
        let index = 0;
        let nextIndex = this.getNextIndex(index);

        while (
            nextIndex != null &&
            this.comp(this.heap[index], this.heap[nextIndex]) >= 0
        ) {
            this.swap(index, nextIndex);
            index = nextIndex;
            nextIndex = this.getNextIndex(nextIndex);
        }
    }
}