// https://www.educative.io/courses/grokking-the-coding-interview/B6x69OLX4jY
//
// Maximize Capital

// Input: Project Capitals=[0,1,2,3], Project Profits=[1,2,3,5], Initial Capital=0, Number of Projects=3
// Output: 8

class Heap {
  constructor(sort) {
    this.sort = sort;
    this.arr = [];
    this.push = (el) =>
      (this.arr = [...this.arr, el].sort((a, b) => this.sort(a, b)));
    this.pop = () => this.arr.shift();
    this.remove = (toDelete) =>
      (this.arr = this.arr.filter((el) => el !== toDelete));
  }
}
const find_maximum_capital = function (
  capitals,
  profits,
  count,
  cash,
  minHeap = new Heap((x, y) => x.capital - y.capital),
  maxHeap = new Heap((x, y) => y.profit - x.profit)
) {
  for (let i = 0; i < capitals.length; i++)
    minHeap.push({ capital: capitals[i], profit: profits[i] }); // init minCapital
  for (let i = 0; i < count; i++) {
    if (!minHeap.arr.length) break; // conner case
    while (minHeap.arr.length && cash >= minHeap.arr[0].capital)
      maxHeap.push(minHeap.pop()); // initMaxProfits
    cash += maxHeap.arr[0].profit;
    maxHeap.pop();
  }
  return cash;
}; // T:O(N) S:O(N)
// after all heap init
// T:O(NlogN + KLogN) K - selected projects count
