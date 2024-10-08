
// https://leetcode.com/problems/min-cost-to-connect-all-points/description/
// 
// Min Cost to Connect All Points


// BFS
// visited
// minHeap
function minCostConnectPoints(points: number[][]): number {
    const len = points.length;
    const visited = new Set();
    const minHeap = new Heap((a, b) => a.val - b.val);
    const getDist = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
    let count = 0;
    let A = points.pop();

    for (let B of points) {
        let [x, y] = B;
        minHeap.add({ x, y, val: getDist(A, B) });
    }
    visited.add(`${A[0]},${A[1]}`);

    while (visited.size !== len) {
        let { x, y, val } = minHeap.remove();
        if (visited.has(`${x},${y}`)) continue;
        visited.add(`${x},${y}`);
        count += val;

        // Update A to the new point
        A = [x, y];
        // Add edges from the new A to all unvisited points
        for (let B of points) {
            let [x, y] = B;
            if (visited.has(`${x},${y}`)) continue;
            minHeap.add({ x, y, val: getDist(A, B) });
        }
    }

    return count;
}; // T:O(n^2 log n) S:O(n^2)

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