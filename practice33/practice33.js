//i: number as a argument
//o: returns all numbers as negative, if not a number return as false
//c: must be a number, or return as a false
//e: none


function invert(num) {
  if( typeof num === "number"){
    return Math.abs(num) * -1;
  }
  else {
    return false;
  }

}

// console.log(invert(-5)); // -5
// console.log(invert(4000)); // -4000
console.log(invert('puppies')); // false
