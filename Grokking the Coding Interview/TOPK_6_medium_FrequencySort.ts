// https://www.educative.io/courses/grokking-the-coding-interview/gxZz615BPPG
//
// Frequency Sort

const sort_character_by_frequency = function (str) {
  // catch err
  if (str.lenght <= 1) return str; // conner case
  const mapCount = getMapCount(str.split(''));
  let max = new Heap(true);
  for (let char of Object.keys(mapCount)) {
    const count = mapCount[char];
    max.push({ char, count });
  }
  let newString = '';
  while (max.arr.length > 0) {
    let { char, count } = max.pop();
    newString += Array(count).fill(char).join('');
  }
  return newString;
}; // T:(NlogN + NlogN); S:(N)

function getMapCount(arr) {
  let map = {};
  for (let el of arr) {
    map[el] = map[el] ? map[el] + 1 : 1;
  }
  return map;
}

class Heap {
  constructor(isMax = false) {
    this.arr = [];
    this.sort = isMax
      ? (a, b) => b.count - a.count
      : (a, b) => a.count - b.count;
  }
  push(el) {
    this.arr.push(el);
    this.arr.sort(this.sort);
  }
  pop() {
    let tmp = this.arr.shift();
    this.arr.sort(this.sort);
    return tmp;
  }
}
