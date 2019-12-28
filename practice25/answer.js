function add(arr1, arr2) {
  var result = [];
  for (var i = 0; i < arr1.length; i++) {
    result.push(arr1[i] + arr2[i])
  }
  return result;
}

var first = [3, -5, 15, 4];
var second = [3, 18, -5, -4]
console.log(add(first, second)) //[6,13,10,0]
