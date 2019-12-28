function skippyNum(num) {
  var result = [];
  for (var i = num; i <= 12; i+=3) {
    result.push(i, i+1);
  }
  return result;
}
console.log(skippyNum(2)); //[2,3,5,6,8,9,11,12]


function skipNumber(num) {
  var arr = []
  for (var i = num; i <= 12; i % 3 === 0 ? i = i + 2 : i++) {
    arr.push(i)
  }
  return arr;
}
console.log(skipNumber(2)) // [2,3,5,6,8,9,11,12]
