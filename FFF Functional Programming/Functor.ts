// Array is Functor with map function
// - object that have map method
// - It keeps structure, traform each value but keep structure
// - return a new functor, could do.map().map().map...// chaning

let plus2 = val => {
  return val + 2;
};

let minus1 = val => {
  return val - 1;
};

console.log([1, 2, 3].map(plus).map(minus1));
