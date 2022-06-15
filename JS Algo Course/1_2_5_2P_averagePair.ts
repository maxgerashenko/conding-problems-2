// I don't read task description
// I don't undertand the problem and when I try to solve it

function averagePair(arr, avr){
  // add whatever parameters you deem necessary - good luck!
  if(arr.length < 2) return false

  let i=0, j=arr.length - 1
  while(i < j) {
      let tmp = (arr[i] + arr[j]) /2
      if( tmp === avr) return true
      if( tmp < avr) i++
      if( tmp > avr) j--
  }

  return false
}

console.log(averagePair([1,2,3], 2.5)) // true
console.log(averagePair([], 4) // true

// Write a function called averagePair Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target