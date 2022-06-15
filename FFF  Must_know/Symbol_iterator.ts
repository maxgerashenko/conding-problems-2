// https://www.youtube.com/watch?v=W4brAobC2Hc&list=PL0zVEGEvSaeHJppaRLrqjeTPnCH6vw-sm

console.clear();
let range = {
  [Symbol.iterator]() {
    return {
      current: 1,
      to: 5,
      next() {
        if (this.current <= 5) return { value: this.current++, done: false };
        return { done: true };
      }
    };
  }
};
for (let val of range) {
  console.log(val);
}
console.log("-- Symbol.iterator");
