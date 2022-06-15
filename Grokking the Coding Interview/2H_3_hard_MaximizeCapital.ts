// https://www.educative.io/courses/grokking-the-coding-interview/B6x69OLX4jY
//
// Maximize Capital

const find_maximum_capital = function (
  capitals,
  profits,
  numberOfProjects,
  initCapital
) {
  // init capital
  let minCapital = new Heap();
  for (let index = 0; index < capitals.length; index++) {
    minCapital.push({ index, value: capitals[index] });
  } // T: O(Log n)

  // fin max capital
  let capital = initCapital;
  let maxProfit = new Heap(true);
  for (let i = numberOfProjects; i > 0; i--) {
    while (minCapital.length() > 0 && capital >= minCapital.element().value) {
      let { index } = minCapital.pop();
      maxProfit.push({ index, value: profits[index] });
    }
    capital += maxProfit.element().value;
  } // T: O(N*LogS)

  return capital === initCapital ? -1 : capital;
}; // T: O(N*LogS) S: O(N)
