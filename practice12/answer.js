function mathSeq(num) {
  var result = [];
  for (var i = num * 2; i < num + 38; i += 2) {
    if (i > num * 10) {
      var newNum = i / 4;
    } else {
      newNum = i;
    }
    result.push(newNum);
  }
  return result;
}


console.log(mathSeq(2))
//[4, 6, 8, 10, 12, 14, 16, 18, 20, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5]
console.log(mathSeq(5))
//[10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42]
