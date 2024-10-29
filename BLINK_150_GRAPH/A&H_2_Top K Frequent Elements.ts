// https://leetcode.com/problems/top-k-frequent-elements/submissions/1436985945/
//
// Top K Frequent Elements

// numCountMap
// minHeap
function topKFrequent(nums: number[], k: number): number[] {
    const numCountMap = {};
    const minHeap = new Heap(([numA, valA], [numB, valB]) => valA - valB);

    for (let num of nums) {
        if (numCountMap[num] == null) {
            numCountMap[num] = 0;
        }
        numCountMap[num]++;
    } // init count

    for (let [key, value] of Object.entries(numCountMap)) {
        minHeap.add([key, value]);
        if (minHeap.heap.length > k) {
            minHeap.remove();
        }
    }

    return minHeap.heap.map(([key, value]) => Number(key));
}; // T:O(nlogK) S:O(k)

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