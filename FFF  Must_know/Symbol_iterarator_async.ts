// https://www.youtube.com/watch?v=W4brAobC2Hc&list=PL0zVEGEvSaeHJppaRLrqjeTPnCH6vw-sm

console.clear();
let range = {
  [Symbol.asyncIterator]() {
    return {
      current: 0,
      last: 5,
      async next() {
        await new Promise(resolve => setTimeout(resolve, 300));
        if (this.current < this.last)
          return { value: this.current++, done: false };
        return { done: true };
      }
    };
  }
};

console.log("--- AsyncIterator");
for await (let val of range) {
  console.log(val);
}
