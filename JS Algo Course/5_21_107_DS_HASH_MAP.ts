console.clear();

class HashMap {
  constructor(size = 53) {
    this.hashMap = new Array(size);
  }
  _hash(str) {
    let total = 0,
      maxLength = Math.min(100, str.length),
      WIERD_PRIME = 31;
    for (let i = 0; i < maxLength; i++) {
      //  96 is the beginig of the alphabet
      let value = str.charCodeAt(i) - 96;
      // Spead numbers with Prime number
      // Use Prime number for the list length
      // to reduce colisions x1000 times
      total *= WIERD_PRIME;
      total += value;
    }
    return total % this.hashMap.length;
  }

  setSeparateChaning(key, value) {
    // Assess key and value
    // Hash key
    // Store the key-value pair in the hashMap array
    // error prone
    if (key == null) return null;
    key = "" + key;
    let index = this._hash(key);
    let current = this.hashMap[index];
    if (current == null) this.hashMap[index] = [];
    this.hashMap[index].push([key, value]);
    return this;
  }
  getSeparateChaning(key) {
    // error prone
    if (key == null) return null;
    key = "" + key;
    let index = this._hash(key);
    let current = this.hashMap[index];
    if (current == null) return null;
    for (let el of current) {
      if (el[0] === key) return el;
    }
    return null;
  }
  keys() {
    // use filter to return only unique valuse
    return this.hashMap.reduce(
      (prev, a) => [
        ...prev,
        ...a
          .map(x => x[0])
          .filter((value, index, self) => self.indexOf(value) === index)
      ],
      []
    );
  }
  values() {
    // return all values
    return this.hashMap.reduce((prev, a) => [...prev, ...a.map(x => x[1])], []);
  }
}

console.log("HASH MAP ---");
let hashMap = new HashMap(3);
console.log("Hash function ---");
console.log(hashMap._hash("pruple"));
console.log(hashMap._hash("cyan"));
console.log(hashMap._hash("maroon"));
console.log(hashMap._hash("azure"));
console.log(hashMap._hash("coral"));
console.log(hashMap._hash("navy"));
console.log("set separateChaning ---");
hashMap.setSeparateChaning("pruple", "#800080");
hashMap.setSeparateChaning("pruple", "#800080");
hashMap.setSeparateChaning("pruple", "#800080");
hashMap.setSeparateChaning("cyan", "#00ffff");
hashMap.setSeparateChaning("maroon", "#800000");
hashMap.setSeparateChaning("azure", "#f0ffff");
hashMap.setSeparateChaning("coral", "#ff7f50");
console.log(JSON.stringify(hashMap));
console.log("get separateChaning ---");
console.log(hashMap.getSeparateChaning("pruple"));
console.log(hashMap.getSeparateChaning("azure"));
console.log("keys ---");
console.log(hashMap.keys());
console.log("values ---");
console.log(hashMap.values());
