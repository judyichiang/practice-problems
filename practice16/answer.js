function factorSequence(n) {
  var arr = [];
  while (arr.length < 11) {
    if (n % 3 === 0) {
      arr.push(n);
    } else {
      arr.push(0);
    }
    n++;
  }
  return arr;
}

console.log(factorSequence(2)) //[0,3,0,0,6,0,0,9,0,0,12]
