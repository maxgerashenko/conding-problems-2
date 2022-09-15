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
  minCapital = new Heap((x, y) => x.cap - y.cap),
  maxProfit = new Heap((x, y) => y.prof - x.prof)
) {
  for (let i = 0; i < capitals.length; i++)
    minCapital.push({ cap: capitals[i], index: i }); // init cap
  for (let i = 0; i < count; i++) {
    if (minCapital.length === 0) break;
    let { cap: minCap, index } = minCapital.pop(); // init capital
    if (capital >= minCap) maxProfit.push({ prof: profits[index] }); // init profits
    while (minCapital.length && capital >= minCapital.value.cap) {
      let el = minCapital.pop();
      minCap = el.cap;
      index = el.index;
      maxProfit.push({ prof: profits[index] }); // update profits options
      if (minCap === capital) break;
    }
    if (maxProfit.length === 0) break;
    let { prof } = maxProfit.pop();
    capital += prof;
  }

  return capital;
}; // T:O(K*NLogN+NlogK) S:O(N)
