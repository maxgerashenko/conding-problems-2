// https://www.educative.io/courses/grokking-the-coding-interview/3Yj2BmpyEy4
//
// Find the Median of a Number Stream

// Design a class to calculate the median of a number stream

class MedianOfAStream {
  constructor() {
    this.max = new Heap(true)
    this.min = new Heap();
  }

  insert_num(num) {
    // conner case
    if (this.max.length() === 0) {
      this.max.push(num);
      return;
    }

    if(num <= this.max.value()){
      this.max.push(num);
    } else {
      this.min.push(num);
    }

    this.rebalance();
  }

  rebalance(){
    if(this.max.length() > this.min.length() + 1){
      this.min.push(this.max.pop());
      return;
    }

    if(this.max.length() < this.min.length()){
      this.max.push(this.min.pop());
    }
  }

  find_median() {
    // exeption 
    if (this.max.length() === 0) return -1;

    // conner case
    if (this.min.left() === 0 || this.max.length() > this.min.length()) {
      return this.max.value();
    }

    // base case
    return (this.max.value() + this.min.value()) / 2;
  }
}; // T: (N log N), getMin O(1); S:(N)
