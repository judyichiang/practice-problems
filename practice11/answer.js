function evenOdd(parm) {
  var result = {};
  var even = [];
  var odd = [];
  for (var i = 0; i < parm.length; i++) {
    if (typeof parm[i] === "number") {
      if (parm[i] % 2 === 0) {
        even.push(parm[i]);
      }
      else {
        odd.push(parm[i]);
      }
    }
  }
  result.odd = odd;
  result.even = even;
  return result;
}

console.log(evenOdd([2, 5, 1, 6, 8, 2, 20, 'cat', 13, 3]));
//{odd: [5, 1, 13, 3],even: [2, 6, 8, 20]}
