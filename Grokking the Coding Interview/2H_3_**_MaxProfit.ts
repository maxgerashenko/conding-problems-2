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
  projectsCount,
  totalCapital,
  minCapital = new Heap((x, y) => x.capital - y.capital),
  maxProfit = new Heap((x, y) => y - x)
) {
  for (let i = 0; i < capitals.length; i++)
    minCapital.push({ index: i, capital: capitals[i] }); // init min capital
  while (projectsCount && minCapital.length) {
    projectsCount--;
    let { index } = minCapital.pop();
    maxProfit.push(profits[index]);
    while (minCapital.length && totalCapital >= minCapital.value.capital) {
      maxProfit.push(profits[minCapital.pop().index]);
    }
    totalCapital += maxProfit.pop();
  }
  return totalCapital;
}; // T:O(NlongN + KlogN) S:O(N)
