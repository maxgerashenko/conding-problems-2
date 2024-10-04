
// https://leetcode.com/problems/min-cost-to-connect-all-points/description/
// 
// Min Cost to Connect All Points




// FIX !!!!!
function minCostConnectPoints(points: number[][]): number {
    const len = points.length;
    const minHeap = new Heap((a, b) => a.val - b.val);
    const visited = new Set();
    let count = 0;

    const getVal = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);

    if (len < 2) return 0;

    minHeap.add({ index: 0, val: 0 });

    while (minHeap.heap.length > 0) {
        let { index: i, val } = minHeap.remove();
        let a = points[i];
        visited.add(i); // update visited

        count += val; // count

        // update frontier
        for (let j = 1; j < len; j++) {
            if (visited.has(j)) continue;

            let b = points[j];
            minHeap.add({ index: j, val: getVal(a, b) });
        }
    }

    return count;
}; // T:O(n^2logn) S:O(n)


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