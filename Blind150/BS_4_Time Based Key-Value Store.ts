// https://stackblitz.com/edit/conding-problems-oajgfe?file=Blind150%2FBS_3_Koko%20Eating%20Bananas.ts,Blind150%2FBS_4.ts
// Time Based Key-Value Store

class TimeMap {
  constructor() {}

  set(key: string, value: string, timestamp: number): void {
    if (this[key] == null) {
      this[key] = [];
    }
    this[key].push({ val: value, time: timestamp });
  }

  get(key: string, timestamp: number): string {
    if (this[key] == null || this[key].length === 0) return null;
    return this.getBS(key, timestamp);
  }

  private getBS(key, timestamp) {
    let left = 0;
    let right = this[key].length - 1;

    let res = 0;
    let t = 0;
    while (left <= right) {
      let pivot = left + ~~(right / 2 - left / 2);
      let { val, time } = this[key][pivot];
      if (time === timestamp) return val;

      if (this[key][pivot].timestamp < timestamp) {
        if (timestamp - time < timestamp - t) {
          t = time;
          res = val;
        }
        right = pivot - 1;
        continue;
      }

      if (time - timestamp < t - timestamp) {
        t = time;
        res = val;
      }
      left = pivot + 1;
    }

    return res;
  }
}
