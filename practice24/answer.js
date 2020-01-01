function matrixAdd(arr1, arr2) {
  var result = [];
  for (var i = 0; i < arr1.length; i++) {
    var newArr = []
    for (var k = 0; k < arr2.length; k++) {
      var sum = arr1[i][k] + arr2[i][k];
      newArr.push(sum);
    }
    // debugger;
    result.push(newArr)
  }
  return result;
}


var array1 =
  [
    [1, 2, 3],
    [3, 4, 5],
    [6, 7, 8]
  ]
var array2 =
  [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
  ]

console.log(matrixAdd(array1, array2))
// [
//   [2, 4, 6],
//   [4, 6, 8],
//   [7, 9, 11]
// ]
