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
  get length() {
    return this.arr.length;
  }
  get value() {
    return this.arr[0];
  }
}
const find_maximum_capital = function (
  capitals,
  profits,
  count,
  capital,
  maxProfitHeap = new Heap((x, y) => y - x),
  minCapitalHeap = new Heap((x, y) => x.capital - y.capital)
) {
  for (let index = 0; index < capitals.length; index++)
    minCapitalHeap.push({ capital: capitals[index], index }); // init min Capital Heap
  for (let i = count; i > 0; i--) {
    while (minCapitalHeap.length > 0 && capital >= minCapitalHeap.value.capital)
      maxProfitHeap.push(profits[minCapitalHeap.pop().index]);
    if (maxProfitHeap.length === 0) break;
    capital += maxProfitHeap.pop();
    count--;
  }
  return capital;
}; // T:O(NLogN*KlogN) S:O(N)
